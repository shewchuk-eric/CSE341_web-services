/************************************************
 * File: server.js                              *
 * Purpose: provide local server functionality  *
 * Author: Eric Shewchuk                        *
 ***********************************************/

const mongodb = require('./db/connect.js');
const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; 

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  })
  .use('/', require('./routes/index.js'));
  
/* app.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
.use('/', require('./routes/index.js')); */


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});