const swaggerAutogen = require('swagger-autogen')();

// 👇 Esta línea define si estás en producción
const isProduction = process.env.NODE_ENV === 'production';

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API para manejar contactos',
  },
  host: isProduction ? 'cse341-week1-2.onrender.com' : 'localhost:8080',
  schemes: isProduction ? ['https'] : ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; // Tus rutas

swaggerAutogen(outputFile, endpointsFiles, doc);
