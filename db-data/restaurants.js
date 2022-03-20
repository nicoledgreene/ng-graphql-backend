const restaurantData = [
  {
     "name":"Crab Place",
     "slug":"crab-place",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/2-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/3-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/3-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Roasted Salmon",
              "price":23.99
           },
           {
              "name":"Herring in Lavender Dill Reduction",
              "price":45.99
           },
           {
              "name":"Onion fries",
              "price":15.99
           }
        ],
        "dinner":[
           {
              "name":"Garlic Fries",
              "price":15.99
           },
           {
              "name":"Crab Pancakes with Sorrel Syrup",
              "price":35.99
           },
           {
              "name":"Ricotta Gnocchi",
              "price":15.99
           }
        ]
     },
     "address":{
        "street":"230 W Kinzie Street",
        "city":"Detroit",
        "state":"MI",
        "zip":"53295"
     },
     "resources":{
        "thumbnail":"api/resources/images/3-thumbnail.jpg",
        "owner":"api/resources/images/4-owner.jpg",
        "banner":"api/resources/images/1-banner.jpg"
     },
     "_id":"0rdKBZhfZCycrMFJ"
  },
  {
     "name":"Lettuce Bar",
     "slug":"lettuce-bar",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/4-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/4-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/3-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Gunthorp Chicken",
              "price":21.99
           },
           {
              "name":"Spinach Fennel Watercress Ravioli",
              "price":35.99
           },
           {
              "name":"Onion fries",
              "price":15.99
           }
        ],
        "dinner":[
           {
              "name":"Steamed Mussels",
              "price":21.99
           },
           {
              "name":"Garlic Fries",
              "price":15.99
           },
           {
              "name":"Roasted Salmon",
              "price":23.99
           }
        ]
     },
     "address":{
        "street":"2451 W Washburne Ave",
        "city":"Ann Arbor",
        "state":"MI",
        "zip":"60632"
     },
     "resources":{
        "thumbnail":"api/resources/images/4-thumbnail.jpg",
        "owner":"api/resources/images/1-owner.jpg",
        "banner":"api/resources/images/3-banner.jpg"
     },
     "_id":"IU7zqypXr3qjatER"
  },
  {
     "name":"Brunch Restaurant",
     "slug":"brunch-restaurant",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/1-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/4-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/2-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Crab Pancakes with Sorrel Syrup",
              "price":35.99
           },
           {
              "name":"Ricotta Gnocchi",
              "price":15.99
           },
           {
              "name":"Onion fries",
              "price":15.99
           }
        ],
        "dinner":[
           {
              "name":"Gunthorp Chicken",
              "price":21.99
           },
           {
              "name":"Truffle Noodles",
              "price":14.99
           },
           {
              "name":"Charred Octopus",
              "price":25.99
           }
        ]
     },
     "address":{
        "street":"2451 W Washburne Ave",
        "city":"Chicago",
        "state":"IL",
        "zip":"48211"
     },
     "resources":{
        "thumbnail":"api/resources/images/2-thumbnail.jpg",
        "owner":"api/resources/images/1-owner.jpg",
        "banner":"api/resources/images/3-banner.jpg"
     },
     "_id":"bXbWPiaDuIytAcWQ"
  },
  {
     "name":"Bagel Shack",
     "slug":"bagel-shack",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/2-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/1-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/3-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Herring in Lavender Dill Reduction",
              "price":45.99
           },
           {
              "name":"Crab Pancakes with Sorrel Syrup",
              "price":35.99
           },
           {
              "name":"Roasted Salmon",
              "price":23.99
           }
        ],
        "dinner":[
           {
              "name":"Spinach Fennel Watercress Ravioli",
              "price":35.99
           },
           {
              "name":"Onion fries",
              "price":15.99
           },
           {
              "name":"Ricotta Gnocchi",
              "price":15.99
           }
        ]
     },
     "address":{
        "street":"3108 Winchester Ct.",
        "city":"Detroit",
        "state":"MI",
        "zip":"60045"
     },
     "resources":{
        "thumbnail":"api/resources/images/3-thumbnail.jpg",
        "owner":"api/resources/images/1-owner.jpg",
        "banner":"api/resources/images/2-banner.jpg"
     },
     "_id":"bpIkUe6o7jBHUIRi"
  },
  {
     "name":"Pig Bar",
     "slug":"pig-bar",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/4-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/4-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/2-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Charred Octopus",
              "price":25.99
           },
           {
              "name":"Herring in Lavender Dill Reduction",
              "price":45.99
           },
           {
              "name":"Spinach Fennel Watercress Ravioli",
              "price":35.99
           }
        ],
        "dinner":[
           {
              "name":"Ricotta Gnocchi",
              "price":15.99
           },
           {
              "name":"Garlic Fries",
              "price":15.99
           },
           {
              "name":"Chicken with Tomato Carrot Chutney Sauce",
              "price":45.99
           }
        ]
     },
     "address":{
        "street":"1601-1625 N Campbell Ave",
        "city":"Chicago",
        "state":"IL",
        "zip":"60632"
     },
     "resources":{
        "thumbnail":"api/resources/images/1-thumbnail.jpg",
        "owner":"api/resources/images/4-owner.jpg",
        "banner":"api/resources/images/3-banner.jpg"
     },
     "_id":"dSCobm6AVSKLUB8m"
  },
  {
     "name":"Bagel Place",
     "slug":"bagel-place",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/4-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/3-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/3-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Crab Pancakes with Sorrel Syrup",
              "price":35.99
           },
           {
              "name":"Roasted Salmon",
              "price":23.99
           },
           {
              "name":"Truffle Noodles",
              "price":14.99
           }
        ],
        "dinner":[
           {
              "name":"Ricotta Gnocchi",
              "price":15.99
           },
           {
              "name":"Spinach Fennel Watercress Ravioli",
              "price":35.99
           },
           {
              "name":"Gunthorp Chicken",
              "price":21.99
           }
        ]
     },
     "address":{
        "street":"230 W Kinzie Street",
        "city":"Milwaukee",
        "state":"WI",
        "zip":"60602"
     },
     "resources":{
        "thumbnail":"api/resources/images/2-thumbnail.jpg",
        "owner":"api/resources/images/2-owner.jpg",
        "banner":"api/resources/images/1-banner.jpg"
     },
     "_id":"geBUGALiuwAZcsNP"
  },
  {
     "name":"Cow Barn",
     "slug":"cow-barn",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/2-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/3-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/2-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Roasted Salmon",
              "price":23.99
           },
           {
              "name":"Spinach Fennel Watercress Ravioli",
              "price":35.99
           },
           {
              "name":"Ricotta Gnocchi",
              "price":15.99
           }
        ],
        "dinner":[
           {
              "name":"Herring in Lavender Dill Reduction",
              "price":45.99
           },
           {
              "name":"Garlic Fries",
              "price":15.99
           },
           {
              "name":"Chicken with Tomato Carrot Chutney Sauce",
              "price":45.99
           }
        ]
     },
     "address":{
        "street":"3108 Winchester Ct.",
        "city":"Green Bay",
        "state":"WI",
        "zip":"48229"
     },
     "resources":{
        "thumbnail":"api/resources/images/2-thumbnail.jpg",
        "owner":"api/resources/images/2-owner.jpg",
        "banner":"api/resources/images/2-banner.jpg"
     },
     "_id":"nRSj5XfS0PG1IUQ2"
  },
  {
     "name":"Lettuce Place",
     "slug":"lettuce-place",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/2-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/2-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/3-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Onion fries",
              "price":15.99
           },
           {
              "name":"Herring in Lavender Dill Reduction",
              "price":45.99
           },
           {
              "name":"Chicken with Tomato Carrot Chutney Sauce",
              "price":45.99
           }
        ],
        "dinner":[
           {
              "name":"Garlic Fries",
              "price":15.99
           },
           {
              "name":"Steamed Mussels",
              "price":21.99
           },
           {
              "name":"Truffle Noodles",
              "price":14.99
           }
        ]
     },
     "address":{
        "street":"285 W Adams Ave",
        "city":"Peoria",
        "state":"IL",
        "zip":"60045"
     },
     "resources":{
        "thumbnail":"api/resources/images/2-thumbnail.jpg",
        "owner":"api/resources/images/2-owner.jpg",
        "banner":"api/resources/images/4-banner.jpg"
     },
     "_id":"ng0y52isCIj2CCqW"
  },
  {
     "name":"Cow Place",
     "slug":"cow-place",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/2-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/2-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/1-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Onion fries",
              "price":15.99
           },
           {
              "name":"Crab Pancakes with Sorrel Syrup",
              "price":35.99
           },
           {
              "name":"Herring in Lavender Dill Reduction",
              "price":45.99
           }
        ],
        "dinner":[
           {
              "name":"Chicken with Tomato Carrot Chutney Sauce",
              "price":45.99
           },
           {
              "name":"Truffle Noodles",
              "price":14.99
           },
           {
              "name":"Charred Octopus",
              "price":25.99
           }
        ]
     },
     "address":{
        "street":"285 W Adams Ave",
        "city":"Chicago",
        "state":"IL",
        "zip":"60602"
     },
     "resources":{
        "thumbnail":"api/resources/images/2-thumbnail.jpg",
        "owner":"api/resources/images/4-owner.jpg",
        "banner":"api/resources/images/4-banner.jpg"
     },
     "_id":"rH52shVCUpXztwPH"
  },
  {
     "name":"Cheese Curd City",
     "slug":"cheese-curd-city",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/4-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/4-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/3-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Ricotta Gnocchi",
              "price":15.99
           },
           {
              "name":"Truffle Noodles",
              "price":14.99
           },
           {
              "name":"Herring in Lavender Dill Reduction",
              "price":45.99
           }
        ],
        "dinner":[
           {
              "name":"Gunthorp Chicken",
              "price":21.99
           },
           {
              "name":"Spinach Fennel Watercress Ravioli",
              "price":35.99
           },
           {
              "name":"Onion fries",
              "price":15.99
           }
        ]
     },
     "address":{
        "street":"1601-1625 N Campbell Ave",
        "city":"Green Bay",
        "state":"WI",
        "zip":"53205"
     },
     "resources":{
        "thumbnail":"api/resources/images/1-thumbnail.jpg",
        "owner":"api/resources/images/2-owner.jpg",
        "banner":"api/resources/images/4-banner.jpg"
     },
     "_id":"uOWSuWmJNiraCHmm"
  },
  {
     "name":"Poutine Palace",
     "slug":"poutine-palace",
     "images":{
        "thumbnail":"node_modules/place-my-order-assets/images/1-thumbnail.jpg",
        "owner":"node_modules/place-my-order-assets/images/3-owner.jpg",
        "banner":"node_modules/place-my-order-assets/images/3-banner.jpg"
     },
     "menu":{
        "lunch":[
           {
              "name":"Garlic Fries",
              "price":15.99
           },
           {
              "name":"Truffle Noodles",
              "price":14.99
           },
           {
              "name":"Spinach Fennel Watercress Ravioli",
              "price":35.99
           }
        ],
        "dinner":[
           {
              "name":"Charred Octopus",
              "price":25.99
           },
           {
              "name":"Ricotta Gnocchi",
              "price":15.99
           },
           {
              "name":"Steamed Mussels",
              "price":21.99
           }
        ]
     },
     "address":{
        "street":"1601-1625 N Campbell Ave",
        "city":"Green Bay",
        "state":"WI",
        "zip":"48211"
     },
     "resources":{
        "thumbnail":"api/resources/images/1-thumbnail.jpg",
        "owner":"api/resources/images/3-owner.jpg",
        "banner":"api/resources/images/3-banner.jpg"
     },
     "_id":"zoRAsv8OzEW861wx"
  }
]

module.exports = {
   restaurantData
}