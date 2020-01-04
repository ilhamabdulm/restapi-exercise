const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const contactRoute = require('./router/contactRoutes')
app.use('/contacts', contactRoute)

module.exports = app