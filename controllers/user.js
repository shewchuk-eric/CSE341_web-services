const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getUser = async (req, res, next) => { // found it necessary to specify the database name and collection 
  const result = await mongodb.getDb().db('web_services').collection('users').find({});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
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
};

const writeNewUser = async (req, res, next) => {
  console.log(req.body.firstName);
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db('web_services').collection('users').insertOne(newUser);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Something went wrong.');
  }
};

const deleteUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('web_services').collection('users').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};


 const updateUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db('web_services')
    .collection('users')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
}; 


module.exports = { getUser, getUsername, getUserByID, writeNewUser, updateUser, deleteUser };