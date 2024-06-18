import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  urlTickets: string = "http://localhost:3000/api/ticket/";
  constructor(private _http:HttpClient) { }
 /**Retorna una lista con todos los tickets.*/
  public getTickets():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlTickets, httpOptions); 
  }
  /**Crea un ticket.*/
  public createTicket(ticket: any):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    const body = ticket;
    return this._http.post(this.urlTickets,body, httpOptions); 
  }
 /**Elimina un ticket por id.*/
  public deleteTicket(id: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.delete(this.urlTickets+id, httpOptions); 
  }
  /** Modifica los datos de un ticket por id.*/
  public editTicket(ticket: Ticket):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    const body = ticket;
    return this._http.put(this.urlTickets+ticket._id,body, httpOptions); 
  }
  /**Retorna una lista de tickets, segun la categoria del espectador (e:extranjero, l:local)*/
  public getProductosByCategoriaEspectador(categoria: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlTickets+categoria, httpOptions); 
  }
}
