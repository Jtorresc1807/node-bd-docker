const express = require("express");
const productoController = require("./../controllers/producto.controller")

const Router = express.Router();

// CRUD Productos
Router.get("/producto", productoController.listar);
Router.post("/producto", productoController.guardar);
Router.get("/producto/:id", productoController.mostrar);
Router.put("/producto/:id", productoController.modificar);
Router.delete("/producto/:id", productoController.eliminar);

// CRUD Usuarios



module.exports = Router;