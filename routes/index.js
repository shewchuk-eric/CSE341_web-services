const routes = require('express').Router(); // Router used to set and find locations
const myController = require('../controllers/index.js'); // myController is now an object that refers to the exported functions found inside controllers/index.js

routes.get('/', myController.awesomeFunction); // this code goes only to the first exported function regardless of the function named
routes.get('/second', myController.anotherFunction); // giving a name allows drilling into file

module.exports = routes; // make everything accessible to routes available outside this file