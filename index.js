const { ApolloServer, gql } = require('apollo-server');
const { restaurantData } = require('./db-data/restaurants')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Restaurant" type defines the queryable fields for every restaurant in our data source.
  type Restaurant {
    name: String!
    slug: String!
    images: RestaurantImageObject
    menu: RestaurantMenuObject
    address: RestaurantAddressObj
    resource: RestaurantImageObject
    _id: String
  }

  type RestaurantImageObject {
    thumbnail: String,
    owner: String,
    banner: String
  }

  type RestaurantMenuObject {
    lunch: [MenuItemObject],
    dinner: [MenuItemObject]
  }

  type MenuItemObject {
    name: String,
    price: Float
  }

  type RestaurantAddressObj {
    street: String,
    city: String,
    state: String,
    zip: String
  }

  input CreateRestaurantInput {
    name: String!
    slug: String!
    images: CreateRestaurantImageObject
    menu: CreateRestaurantMenuObject
    address: CreateRestaurantAddressObj
    resource: CreateRestaurantImageObject
  }

  input CreateRestaurantImageObject {
    thumbnail: String,
    owner: String,
    banner: String
  }

  input CreateRestaurantMenuObject {
    lunch: [CreateMenuItemObject],
    dinner: [CreateMenuItemObject]
  }

  input CreateMenuItemObject {
    name: String,
    price: Float
  }

  input CreateRestaurantAddressObj {
    street: String,
    city: String,
    state: String,
    zip: String
  }

  input CreateMenuItemObject {
    name: String,
    price: Float
  }

  union CreateRestaurantResponse = CreateRestaurantSuccess | CreateRestaurantError

  type CreateRestaurantSuccess {
    restaurant: Restaurant!
  }

  type CreateRestaurantError {
    message: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "restaurants" query returns an array of zero or more Restaurant (defined above).
  type Query {
    restaurants: [Restaurant],
    restaurantByName(name: String): Restaurant
  }
  
  # The "Mutation" type is special: it lists all of the available mutations
  # that clients can execute along with the return type of each.
  type Mutation {
    createRestaurant(input: CreateRestaurantInput!): CreateRestaurantResponse
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves restaurants
const resolvers = {
  Query: {
    restaurants: () => {
      return restaurantData
    },
    restaurantByName: (_, {name}) => {
      return restaurantData.find((restaurant) => restaurant.name == name)
    }
  },
  Mutation: {
    createRestaurant: (_, {input}) => {
      if(!input.name || !input.slug) {
        throw new CreateRestaurantError('Restaurants must have a name and slug')
      }

      // Create a random id. Let's use Date.now()
      const _id = Date.now().toString()
      const restaurant = {
        ...input,
        _id
      }
      restaurantData.push(restaurant)
      return {
        __typename: 'CreateRestaurantSuccess',
        restaurant: {
          name: input.name,
          slug: input.slug,
          _id
        }
      }
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
}


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
