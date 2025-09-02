const express = require("express");
const dotenv = require("dotenv");
const { initDb } = require("./db/connect");

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

initDb((err) => {
  if (err) {
    console.error("Error conectando a MongoDB:", err);
  } else {
    console.log("✅ Conectado a MongoDB");

    // Mover rutas aquí, después de conectar
    app.use("/contacts", require("./routes/contacts"));

    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  }
});
