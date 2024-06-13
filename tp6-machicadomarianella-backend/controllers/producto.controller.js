const Producto = require('../models/producto');
const productoCtrl = {}
/**Retorna un lista de productos destacados.*/
productoCtrl.getProductosDestacados = async (req, res) => {
    var productos = await Producto.find({ destacado: true });
    res.json(productos);
}
/**Crea un producto.*/
productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
/**Retorna un lista de productos.*/
productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
}
/**Retorna un producto por id.*/
productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}
/**Elimina un producto por id.*/
productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
/** Modifica los datos de un producto por id.*/
productoCtrl.editProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, vproducto);
        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = productoCtrl;