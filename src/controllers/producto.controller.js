const Producto = require("./../models/Producto");

async function listar(req, res){
    try {
        const productos = await Producto.findAll(); // select * from productos

        return res.status(200).json(productos);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensaje: "Error al obtener los productos"})

    }
}
async function guardar(req, res){
    try {
        await Producto.create(req.body);

        return res.status(201).json({mensaje: "Producto registrado"})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensaje: "Error al guardar producto"})

    }
}
async function mostrar(req, res){
    try {
        const {id} = req.params;

        const producto = await Producto.findByPk(id);

        return res.status(200).json(producto);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensaje: "Error al mostrar el producto"})

    }
}
async function modificar(req, res){
    try {
        const {id} = req.params;

        const producto = await Producto.findByPk(id);
        await producto.update(req.body)
        return res.status(200).json(producto);

    } catch (error) {
        return res.status(500).json({mensaje: "Error al modificar el producto"})

    }
}
async function eliminar(req, res){
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);

        producto.destroy();
        return res.status(200).json({mensaje: "Producto eliminado"})

    } catch (error) {
        return res.status(500).json({mensaje: "Error al elimniar el Producto"})

    }
}

module.exports = {
    listar,
    guardar,
    mostrar,
    eliminar,
    modificar
}