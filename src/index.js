const express = require("express");
require("dotenv").config();
const router = require("./router");

const User = require("./models/User");
const Producto = require("./models/Producto");
// inicializando una app de express
const app = express();

// datos en formato json
app.use(express.json());

// crear variables
const port = process.env.PORT || 3000;

app.get("/", function(req, res){
    return res.json({mensaje: "Saludos desde mi App de Node (MODIFICADO) último 3"});
});

app.use("/api", router)

app.listen(port, function(){
    console.log("Servidor corriendo en el puerto 3000 (ultima modificación) 3");
})