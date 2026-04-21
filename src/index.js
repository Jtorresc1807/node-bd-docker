const express = require("express");
const User = require("./models/User");
const Producto = require("./models/Producto");
// inicializando una app de express
const app = express();

app.get("/", function(req, res){
    return res.json({mensaje: "Saludos desde mi App de Node (MODIFICADO) último 3"});
});

app.listen(3000, function(){
    console.log("Servidor corriendo en el puerto 3000 (ultima modificación) 3");
})