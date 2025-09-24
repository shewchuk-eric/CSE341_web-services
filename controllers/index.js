const mongodb = require('../db/connect.js');

const awesomeFunction = (req, res, next) => { 
    res.json('Carrie Shewchuk');
};

const anotherFunction = (req, res, next) => { 
    res.json('This is a great function');
};

const thirdFunction = (req, res, next) => {
    res.send('This is the third function');
};


module.exports = { awesomeFunction, anotherFunction, thirdFunction }; // this style allows for multiple comma-separated exports 
