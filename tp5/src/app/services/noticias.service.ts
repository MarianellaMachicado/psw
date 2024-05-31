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
        'X-RapidAPI-Key': 'fa2a339ecemsha9c3778d5f20bbfp1337c9jsn2daab9436e3e'}),
    } 
    return this._http.get("https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913321150030&page=1", httpOptions); } 
}
