import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(private _http:HttpClient) { }

  public getAuthors():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}),
    } 
    return this._http.get("https://hapi-books.p.rapidapi.com/top_authors", httpOptions); 
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
