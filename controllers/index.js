const awesomeFunction = (req, res, next) => { 
    res.json('Carrie Shewchuk');
};

const anotherFunction = (req, res, next) => { 
    res.json('This is a great function');
};

module.exports = {awesomeFunction, anotherFunction}; // this style allows for multiple comma-separated exports 