const mongoose = require('mongoose')
const createDebug = require('debug')
const debug = createDebug('mad9124-w21-a2-mongo-crud:db')

module.exports = function () {
    mongoose
        .connect('mongodb://localhost:27017/crud', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        debug('Successfully connected to MongoDB ...')
    })
    .catch((err) => {
        debug('Problem connecting to MongoDB ...', err.message)
        process.exit(1)
    })
}
