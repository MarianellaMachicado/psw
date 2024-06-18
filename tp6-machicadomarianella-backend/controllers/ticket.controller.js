const Ticket = require('../models/ticket');
const ticketCtrl = {}
/**Crea un ticket.*/
ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
/**Retorna una lista con todos los tickets.*/
ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}
/**Elimina un ticket por id.*/
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticked removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
/** Modifica los datos de un ticket por id.*/
ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, vticket);
        res.json({
            'status': '1',
            'msg': 'Ticket updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
/**Retorna una lista de tickets, segun la categoria del espectador (e:extranjero, l:local)*/
ticketCtrl.getTicketsByCategoria = async (req, res) => {
    const { categoria } = req.params;
    const ticket = await Ticket.find({ categoriaEspectador: categoria}).populate("espectador");;
    res.json(ticket);
}
module.exports = ticketCtrl;