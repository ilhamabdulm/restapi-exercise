const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        return res.status(200).json({})
    }
    next()
})

const contactRoute = require('./router/contactRoutes')
app.use('/contacts', contactRoute)

module.exports = app