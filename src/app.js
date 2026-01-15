// IMPORTACIONES DE TERCEROS
const express = require('express');
require("dotenv").config();
const cookieParser = require("cookie-parser");

// IMPORTACIONES PROPIAS
const app = express();
const port = process.env.PORT || 3000;
const authRouter = require("./routes/auth.routes");

// MIDDLEWARES
app.use(express.json());  // Para JSON
app.use(express.urlencoded({ extended: true })); // Para formularios
app.use(cookieParser());

// RUTAS
app.use("/auth", authRouter);

// LISTENER PARA EL PUERTO
app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto ${port} `);
});