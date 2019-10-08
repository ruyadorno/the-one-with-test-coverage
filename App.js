const fs = require('fs')

const info = require('./log')


const log = (req) => (
  info.log('info: ', req.url),
  ''
)

const notFound = (res) => (
  '404 - Not Found\n'
)

const readme = () =>
  fs.readFileSync('./README.md').toString()


module.exports = {
  log,
  notFound,
  readme
}
