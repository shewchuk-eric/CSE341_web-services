const dotenv = require('dotenv'); // required to use .env variables (hide from public view)
dotenv.config(); 

const { MongoClient, ServerApiVersion } = require('mongodb'); // latest method of connection to mongo

async function main(){
    // get the connection string on next line from cluster 'connect' tab in mongo
    // code on the next line uses .env to import the entire uri
    const client = new MongoClient(process.env.URI, {
      serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
      }
    });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}; 

let _db;

const initDb = callback => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  mongoClient.connect(process.env.URI)
    .then(client => {
      _db = client;
      callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = { initDb, getDb, main }; 