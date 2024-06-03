import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http:HttpClient) { }

  public getNews():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}),
    } 
    return this._http.get("https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913321150030&page=1", httpOptions); } 
}
