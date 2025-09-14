// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API para manejar contactos',
  },
  host: 'localhost:8080', // 
  schemes: ['http'], // Soporta producción y desarrollo
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; // Mis rutas principales

// Generar swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
