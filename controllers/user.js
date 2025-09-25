const mongodb = require('../db/connect');

// FOLLOWING LINE ONLY FOR RENDER.COM - COMMENT OUT FOR LOCALHOST TESTING
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  }});


const getUser = async (req, res, next) => { // found it necessary to specify the database name and collection 
  const result = await mongodb.getDb().db('web_services').collection('users').find({});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    //console.log('at the end of getUser');
    //console.log(result);
  });
};

const getUsername = async (req, res, next) => {
  const result = await mongodb.getDb().db('web_services').collection('users').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0].firstName + ' ' + lists[0].lastName);
  });
};

const getUserByID = async (req, res, next) => {
  const result = await mongodb.getDb().db('web_services').collection('users').find();
  result.toArray().then((lists) => {
    let id = lists[2]._id; //hardcoded to get the third user in the list - would normally get from req.params
    res.setHeader('Content-Type', 'application/json');
    lists.forEach(element => {
      if (element._id == id) {
        res.status(200).json(element.firstName + ' ' + element.lastName);
    };
  });
});
}

module.exports = { getUser, getUsername, getUserByID };