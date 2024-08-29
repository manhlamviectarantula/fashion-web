const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const swaggerSetup = require('../swagger.js'); 

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/src/uploads', express.static('src/uploads'))
// app.use(express.static(__dirname + '/uploads'))
swaggerSetup(app);

require('dotenv').config()

require('./dbs/mongodb')
require('./dbs/redis')

app.use('/', require('./routes/index.js'))

module.exports = app 