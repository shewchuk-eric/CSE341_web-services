

const mongodb = require('./db/connect.js'); // provide access to db connection functions


var express = require('express'); // use the 'express' built-in module - required for server activity
var app = express(); // assign the functionality of express to 'app'\
const port = process.env.PORT || 3000; // 3000 only works for localhost so check for env PORT value and use that if present (happens if remote server)

app.use('/', require('./routes')); // tells Router to go to the root and then into the routes folder to look for a file
// can specify a particular file if more than one exists in folder (...'./routes/index.js')

app.listen(port, () => { // use of 'port' will look for env.PORT value and use it if present
    console.log(`Server is running on port ${port}`); // verifies that server is running and gives port value depending on localhost or remote
});





mongodb.main(() => {
    //mongodb.main((err, mongodb ) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(3000);
  }
});
