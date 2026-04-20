const express = require("express");

// inicializando una app de express
const app = express();

app.get("/", function(req, res){
    return res.json({mensaje: "Saludos desde mi App de Node (Modificado) ajuste 2"});
});

app.listen(3000, function(){
    console.log("Servidor corriendo en el puerto 3000 ajuste 2");
}) 