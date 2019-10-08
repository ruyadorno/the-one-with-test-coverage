const startServer = require('./server')

startServer({
  http: require('http'),
  port: 3000
})
