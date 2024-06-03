import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {
  constructor(private _http:HttpClient) { }
  public getLenguajes():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161' }),
    } 
    return this._http.get("https://google-translator9.p.rapidapi.com/v2/languages", httpOptions); } 
  public traducirTexto(source:string, target:string, text:string):Observable<any>{
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
        'x-rapidapi-key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}), 
    } 
    const body = {
      q: text,
      source: source,
      target: target,
      format: "text"
    };
    return this._http.post("https://google-translator9.p.rapidapi.com/v2",body, httpOptions);
  }
}
