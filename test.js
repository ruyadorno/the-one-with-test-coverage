const { log, notFound, readme } = require('./App')


describe('App', () => {
  it('should render readme', () => {
    expect(readme()).toMatchSnapshot()
  })

  it('should render not found message', () => {
    expect(notFound()).toEqual('404 - Not Found\n')
  })

  it('should log req.url', () => {
    expect.assertions(2)

    const consoleLog = console.log
    console.log = (prefix, msg) => {
      expect(prefix + msg).toEqual('info: /foo')
    }

    expect(log({
      url: '/foo'
    })).toEqual('')
  })
})
