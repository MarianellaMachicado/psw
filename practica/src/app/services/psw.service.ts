import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PswService {
constructor(private _http:HttpClient) { }

  public getStars():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'X-RapidAPI-Host': 'stars-api.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}),
    } 
    return this._http.get("https://stars-api.p.rapidapi.com/starslist", httpOptions); 
  }

  public getStarDetails(id: String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'stars-api.p.rapidapi.com',
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161',
      })
    };
    return this._http.get('https://stars-api.p.rapidapi.com/star?id='+id,httpOptions);
  }
}
