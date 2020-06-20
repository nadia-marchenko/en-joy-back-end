const express = require('express')
const FormData = require('form-data')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')


const app = express()
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  console.log('starting server on port 3000')
  app.listen(3000)
})

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
// var theUrl = "http://localhost:3000/items";
// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(JSON.stringify({ "name": "kolgotki", "description": "excellent", "price": 234, "quantity": 23 }));

