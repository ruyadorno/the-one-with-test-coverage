const { log, notFound, readme } = require('./App')


describe('App', () => {
  it('should render readme', () => {
    expect(readme()).toMatchSnapshot()
  })
})
