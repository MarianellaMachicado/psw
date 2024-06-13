//defino controlador para el manejo de CRUD
const transaccionCtrl = require('../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de transacciones
router.get('/:email',transaccionCtrl.getTransaccionesByEmail);
router.get('/:origen/:destino',transaccionCtrl.getTransaccionesByDivisas);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/',transaccionCtrl.getTansacciones);
//exportamos el modulo de rutas
module.exports = router;