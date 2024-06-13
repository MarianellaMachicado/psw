import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EspectadorService } from '../../services/espectador.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  constructor(private ticketService: TicketService, private espectadorService: EspectadorService){}
  /**Retorna una lista con todos los tickets.*/
  obtenerTickets(): void {
    this.ticketService.getTickets().subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Crea un ticket.*/
  crearTicket(): void {
    let ticket= {
      precioTicket: 40,
      categoriaEspectador: "l",
      fechaCompra: "20/06/2024",
      espectador: {_id:"666a4881646fd4d57c35fe8c"}
    }
    this.ticketService.createTicket(ticket).subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Elimina un ticket por id.*/
  eliminarTicket(): void {
    let id = "666a5057c9276a0eab485f41";//eliminado
    this.ticketService.deleteTicket(id).subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
   /** Modifica los datos de un ticket por id.*/
  modificarTicket(): void {
    let ticket= {
      _id: "666a7e7855f784407ef5be90",
      categoriaEspectador: "e",
    }
    this.ticketService.editTicket(ticket).subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
    /**Retorna una lista de tickets, segun la categoria del espectador (e:extranjero, l:local)*/
  obtenerTicketsPorCategoriaEspectador(): void {
    let categoria = "e"
    this.ticketService.getProductosByCategoriaEspectador(categoria).subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
