import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  urlTransaccion: string = "http://localhost:3000/api/transaccion/";
  constructor(private _http:HttpClient) { }
/**Retorna una lista de todas las transacciones.*/
  public getTransacciones():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlTransaccion, httpOptions); 
  }
  /**Crea una transacción.*/
  public createTransaccion(transaccion: Transaccion):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    const body = transaccion;
    return this._http.post(this.urlTransaccion,body, httpOptions); 
  }
  /**Retorna una lista de transacciones de un cliente por su email.*/
  public getTransaccionesByEmail(email: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlTransaccion+email, httpOptions); 
  }
  public getTransaccionesByDivisas(origen: String, destino: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlTransaccion+origen+"/"+destino, httpOptions); 
  }
}
