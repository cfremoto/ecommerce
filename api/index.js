// imports
require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const router = require('./src/routes/index.js')

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// ruta
app.use('/', router)

// config & listen
const PORT = process.env.PORT || 3002

mongoose.connect(process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} & coneccion to mongoDB`)
    })
  })
  .catch(err => console.log(err))
