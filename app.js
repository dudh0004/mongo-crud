const morgan = require('morgan')
const express = require('express')

require('./startup/connectDatabase')()

const app = express()

app.use(morgan('tiny'))
app.use(express.json())

//routes

module.exports = app