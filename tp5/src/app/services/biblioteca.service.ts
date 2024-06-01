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
        'X-RapidAPI-Key': 'fa2a339ecemsha9c3778d5f20bbfp1337c9jsn2daab9436e3e'}),
    } 
    return this._http.get("https://hapi-books.p.rapidapi.com/top_authors", httpOptions); 
  }
  public getMoreInfoByIdAutor(id: String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
        'X-RapidAPI-Key': 'fa2a339ecemsha9c3778d5f20bbfp1337c9jsn2daab9436e3e',
      })
    };
    return this._http.get(
      'https://hapi-books.p.rapidapi.com/author/'+id,
      httpOptions
    );
  }
}
