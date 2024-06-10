import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  url: string = "https://youtube-v2.p.rapidapi.com/search/?query=";
  constructor(private _http:HttpClient) { }
  
  public getSearch(query: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}),
    } 
    return this._http.get(this.url + query, httpOptions); } 
   
}
