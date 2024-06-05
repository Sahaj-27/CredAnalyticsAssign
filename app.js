// THIS FILE IS THE MAIN BACKEND APPLICATION FILE

// Import the express module
const express = require('express')
const app = express()

// Import the express-async-errors module
require('express-async-errors')

// Import the middleware module
const middleware = require('./utils/middleware')

// Import the cors module
const cors = require('cors')

// Import the controllers
const getLogs = require('./controllers/getLogs')
const postLogs = require('./controllers/postLog')
const patchLogs = require('./controllers/patchLogs')
const deleteLogs = require('./controllers/deleteLogs')

// Use the express.json() middleware
app.use(express.json())
app.use(express.static('build'))

// Use the cors middleware
app.use(cors())

// Use the controllers
app.use('', getLogs)
app.use('', postLogs)
app.use('', patchLogs)
app.use('', deleteLogs)

// Use the middleware
app.use(middleware)

// Export the module
module.exports = app