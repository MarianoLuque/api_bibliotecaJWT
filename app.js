const express = require("express");
const librosRouter = require("./routes/libros");
const errorHandler = require("./middleware/errorHandler.js");
const { auth } = require("express-oauth2-jwt-bearer");

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: "http://localhost:3000/api/productos",
    issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
    tokenSigningAlg: "RS256",
});

const app = express();
const port = 3000;

app.use(express.json());
app.use("/libros", autenticacion, librosRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
