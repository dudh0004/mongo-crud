const http = require('http')
const app = require('./app')
const createDebug = require('debug')
const debug = createDebug('mad9124-w21-a2-mongo-crud:http')

const httpServer = http.createServer(app)


const port = process.env.PORT || 3030
httpServer.listen(port, () => {
    debug(`HTTP server listening on port ${port}`)
})
