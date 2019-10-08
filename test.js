const { log, notFound, readme } = require('./App')


describe('App', () => {
  it('should render readme', () => {
    expect(readme()).toMatchSnapshot()
  })

  it('should render not found message', () => {
    expect(notFound()).toEqual('404 - Not Found\n')
  })
})
