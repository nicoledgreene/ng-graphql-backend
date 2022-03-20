const { resolvers } = require('./index.js')

describe('Server', () => {
  it('Should return all restaurants', () => {
    const result = resolvers.Query.restaurants()
    expect(result.length).toEqual(11)
  })
})
