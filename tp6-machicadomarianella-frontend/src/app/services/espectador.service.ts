import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {
  urlEspectadores: string = "http://localhost:3000/api/espectador/";
  constructor(private _http:HttpClient) { }
  /**Retorna una lista de espectadores.*/
  public getEspectadores():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlEspectadores, httpOptions); 
  }
  /**Crea un espectador.*/
  public createEspectador(espectador: Espectador):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    const body = espectador;
    return this._http.post(this.urlEspectadores,body, httpOptions); 
  }
/**Retorna un espectador por id. */
public getEspectador(id: String):Observable<any>{ 
  const httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
    }),
  } 
  return this._http.get(this.urlEspectadores+id, httpOptions); 
}
}
