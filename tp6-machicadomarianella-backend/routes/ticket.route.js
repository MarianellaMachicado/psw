//defino controlador para el manejo de CRUD
const ticketCtrl = require('../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de tickets
router.post('/', ticketCtrl.createTicket);
router.get('/',ticketCtrl.getTickets);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
router.get('/:categoria', ticketCtrl.getTicketsByCategoria);
//exportamos el modulo de rutas
module.exports = router;