const morgan = require('morgan')
const express = require('express')
const sanitizeMongo = require('express-mongo-sanitize')

require('./startup/connectDatabase')()

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(sanitizeMongo())

app.use('/api/students', require('./routes/students'))
app.use('/api/courses', require('./routes/courses'))

module.exports = app