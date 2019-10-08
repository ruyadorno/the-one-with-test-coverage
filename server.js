const { log, notFound, readme } = require('./App')


function startServer({ http, port }) {
  const server = http.createServer((req, res) => {
    if (req.url === '/readme') {
      return res.end(readme())
    }

    if (req.url.startsWith('/log')) {
      return res.end(log(req))
    }

    res.statusCode = 404,
    res.end(notFound())
  })

  server.listen(port, (err) => {
    if (err) {
      return console.error(err)
    }

    console.log(`Server is listening on ${port}`)
  })
}

module.exports = startServer
