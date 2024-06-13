import { Espectador } from "./espectador";

export class Ticket {
    _id?: string;
    precioTicket?: Number;  
    categoriaEspectador?: String;          
    fechaCompra?: String; 
    espectador?: Espectador;
    constructor(){
        this._id = "";
        this.precioTicket = 0;
        this.categoriaEspectador = "";
        this.fechaCompra = "";
        this.espectador = new Espectador();
    }
}
