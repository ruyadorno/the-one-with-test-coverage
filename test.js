const { log, notFound, readme } = require('./App')
const startServer = require('./server')

const info = require('./log')


jest.mock('./log')

describe('App', () => {
  it('should render readme', () => {
    expect(readme()).toMatchSnapshot()
  })

  it('should render not found message', () => {
    expect(notFound()).toEqual('404 - Not Found\n')
  })

  it('should log req.url', () => {
    expect.assertions(2)

    expect(log({
      url: '/foo'
    })).toEqual('')

    expect(info.log.mock.calls).toEqual([['info: ', '/foo']])
  })
})

describe('server', () => {
  it('should start listening to provided port', () => {
    const listen = jest.fn()
    const http = {
      createServer: () => ({
        listen
      })
    }

    startServer({ http, port: 3000 })
    expect(listen.mock.calls[0][0]).toEqual(3000)
  })
})
