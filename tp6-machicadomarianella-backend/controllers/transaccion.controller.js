const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}
/**Retorna una lista de transacciones de un cliente por su email.*/
transaccionCtrl.getTransaccionesByEmail = async (req, res) => {
    const { email } = req.params;
    const transacciones = await Transaccion.find({ emailCliente: email });
    res.json(transacciones);
}
/**Retorna una lista de transacciones, segun su moneda de origen y moneda de destino.*/
transaccionCtrl.getTransaccionesByDivisas = async (req, res) => {
    const { origen, destino } = req.params;
    const transacciones = await Transaccion.find({monedaOrigen: origen, monedaDestino: destino});
    res.json(transacciones);
}
/**Crea una transacción.*/
transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transacción guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
/**Retorna una lista de todas las transacciones.*/
transaccionCtrl.getTansacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}
module.exports = transaccionCtrl;