
require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(express);
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Add body-parser middleware

// Parse JSON request bodies
app.use(bodyParser.json());

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 


