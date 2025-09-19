** Create project and server by the following code: **

var express = require('express');
var app = express();

Entering npm start into terminal should result in Error: Cannot find module 'express'. 
If so then enter npm i --save express to install it. 
Then enter npm install to add additional dependencies required by express. 
Enter npm start again to prove all good. 
Enter npm i --save-dev nodemon to cause auto refresh of server state when files change. 
Must add "start": "nodemon server.js" to the "scripts" part of package.json and then run npm start once more for auto functioning.                                    


** Connect to MongoDB through Node **
Install MongoDB driver by entering npm install mongodb in terminal.
Create Mongo DB database if not already done.
Add sample data if desired.
Get connection string from Mongo (i.e. mongodb+srv://EricShewchuk:<db_password>@webservices.7rb5fj3.mongodb.net/?retryWrites=true&w=majority&appName=WebServices)
Replace <db_password> with the password for the EricShewchuk database user. Ensure any option params are URL encoded.

get full instructions at https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database

In code file import MongoClient with const {MongoClient} = require('mongodb');
Then create the main() function ->
    async function main() {
	// add code here
    }