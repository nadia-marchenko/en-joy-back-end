const express = require('express');
const bodyParser = require('body-parser');
const { init } = require('./db');
const routes = require('./routes');


const app = express();
app.use(bodyParser.json());
app.use(routes);

init().then(() => {
  console.log(`starting server on port ${process.env.PORT || 5000}`);
  app.listen(process.env.PORT || 5000);
})
