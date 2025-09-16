const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { initDb } = require("./db/connect");

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes')); // ya monta swagger y contacts

app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

initDb((err, db) => {
  if (err) {
    console.error("❌ Error conectando a MongoDB:", err);
  } else {
    console.log("✅ Conectado a MongoDB");
    db.collection('contacts').findOne({}, (err, result) => {
      if (err) {
        console.error("❌ Error al realizar consulta:", err);
      } else if (result) {
        console.log("✅ Conexión y consulta exitosas");
      } else {
        console.log("ℹ️ No se encontraron contactos en la base de datos");
      }
    });
    app.listen(port, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    });
  }
});
