/***************************************************
* Create project and server by the following code: *
****************************************************

var express = require('express');
var app = express();

********************************************************
* entering npm start into terminal should result in    *
* Error: Cannot find module 'express'. If so then      *
* enter npm i --save express to install it. Then enter *
* npm install to add additional dependencies required  *
* by express. Enter npm start again to prove all good. *
* enter npm i --save-dev nodemon to cause auto refresh *
* of server state when files change. Must add          *
* "start": "nodemon server.js" to the "scripts" part   *
* of package.json and then run npm start once more for *
* auto functioning.                                    *
********************************************************/

var express = require('express'); // use the 'express' built-in module - required for server activity
var app = express(); // assign the functionality of express to 'app'\
const port = process.env.PORT || 3000; // 3000 only works for localhost so check for env PORT value and use that if present (happens if remote server)

app.use('/', require('./routes')); // tells Router to go to the root and then into the routes folder to look for a file
// can specify a particular file if more than one exists in folder (...'./routes/index.js')

app.listen(port, () => { // use of 'port' will look for env.PORT value and use it if present
    console.log(`Server is running on port ${port}`); // verifies that server is running and gives port value depending on localhost or remote
});