
const express = require("express");
const router = express.Router();
const { getDb } = require("../db/connect");
const { ObjectId } = require("mongodb");

// GET todos los contactos
router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const contacts = await db.collection("contacts").find().toArray();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Error en el servidor", error: err });
  }
});

// GET contacto por ID
router.get("/:id", async (req, res) => {
  try {
    const db = getDb();
    const contact = await db
      .collection("contacts")
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!contact) return res.status(404).json({ message: "Contacto no encontrado" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: "Error en el servidor", error: err });
  }
});
// POST un nuevo contacto
router.post("/", async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection("contacts").insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: "Error en el servidor", error: err });
  }
});



module.exports = router;
