const { notFound, readme } = require('./App')
const { test } = require('tap')

test('should render readme', (t) => {
  t.matchSnapshot(readme(), 'readme output')
  t.done()
})

test('should render not found message', (t) => {
  t.equal(notFound(), '404 - Not Found\n')
  t.done()
})
