const { log, notFound, readme } = require('./App')

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
