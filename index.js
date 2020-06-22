const express = require('express')
const FormData = require('form-data')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')


const app = express()
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  console.log('starting server on port 5000')
  app.listen(5000);
})
