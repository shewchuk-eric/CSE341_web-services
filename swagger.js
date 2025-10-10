const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Contacts API',
    description: 'Manage user contacts with a MongoDB backend.',
  },
  host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];


swaggerAutogen(outputFile, routes, doc);