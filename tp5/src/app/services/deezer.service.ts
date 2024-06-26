import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  constructor(private _http:HttpClient) { }

  public getBusqueda(buscar: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}),
    } 
    return this._http.get("https://deezerdevs-deezer.p.rapidapi.com/search?q="+buscar, httpOptions); 
  }
  public getMoreInfoByIdAutor(id: String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161',
      })
    };
    return this._http.get(
      'https://hapi-books.p.rapidapi.com/author/'+id,
      httpOptions
    );
  }
}
