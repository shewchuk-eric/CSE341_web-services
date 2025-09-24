/************************************************
 * File: routes.js                              *
 * Purpose: manage various routes               *
 * Author: Eric Shewchuk                        *
 ***********************************************/

let routes = require('express').Router(); // need 'let' to allow for updating with other functionality

const myController = require('../controllers/index.js'); // myController is now an object that refers to the exported functions found inside controllers/index.js


/******************************************
* routes used inside controllers/index.js *
******************************************/
routes.get('/', myController.awesomeFunction); // this code goes only to the first exported function regardless of the function named
routes.get('/second', myController.anotherFunction); // giving a name allows drilling into file
routes.get('/third', myController.thirdFunction);


module.exports = routes; // make everything accessible outside this file

