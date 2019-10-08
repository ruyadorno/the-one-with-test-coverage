const fs = require('fs')


const log = (req) => (
  console.log('info: ', req.url),
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
