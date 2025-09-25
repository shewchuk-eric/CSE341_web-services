const mongodb = require('../db/connect');

async function insertNewUser(userData) {
  // Use a connection string from an environment variable for security
  //const uri = process.env.MONGO_URI || "mongodb://localhost:27017/";
  
  //let client; // Declare client outside the try block for access in finally
  
  try {
    // Establish a connection to the MongoDB server
    client = new MongoClient(uri);
    await client.connect();
    
    // Select the database and collection
    const database = client.db('user_db');
    const usersCollection = database.collection('users');
    
    // Insert the document using insertOne()
    const result = await usersCollection.insertOne(userData);
    
    console.log(`Successfully inserted user with ID: ${result.insertedId}`);
    return true;
    
  } catch (error) {
    console.error(`An error occurred during insertion: ${error}`);
    return false;
    
  } finally {
    // Ensure the client connection is closed
    if (client) {
      await client.close();
    }
  }
}


const getUser = async (req, res, next) => {
  const result = await mongodb.getDb().db('web_services').collection('users').find({});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    console.log('at the end of getUser');
    console.log(result);
  });
};

const getUsername = async (req, res, next) => {
  const result = await mongodb.getDb().db('web_services').collection('users').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0].firstName + ' ' + lists[0].lastName);
  });
};

module.exports = { getUser, getUsername };