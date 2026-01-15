// IMPORTACIONES DE TERCEROS
const express = require("express");
const router = express.Router();

// IMPORTACIONES PROPIAS
const { 
    login,
    obtenerInfoMe
 } = require("../controllers/auth.controllers");

router.post('/login', login);
router.get("/me", obtenerInfoMe);

//EXPORTAR
module.exports = router;