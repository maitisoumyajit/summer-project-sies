const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000
const connectDB = require('./models/db')
connectDB() //running func from the db file to connect to atlas








app.listen(port, ()=> console.log(`running on port ${port}`))














