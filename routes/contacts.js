/************************************************
 * File: contacts.js                            *
 * Purpose: manage routes pertaining to users   *
 * Author: Eric Shewchuk                        *
 ***********************************************/

let users = require('express').Router();
const userController = require('../controllers/user.js');


/******************************************
* routes used inside controllers/user.js  *
******************************************/


users.get('/user', userController.getUser);
users.get('/username', userController.getUsername);
users.get('/userID', userController.getUserByID);

users.post('/writeNewUser', userController.writeNewUser);
users.put('/updateUser/:id', userController.updateUser);
users.delete('/deleteUser/:id', userController.deleteUser);


module.exports = users; 