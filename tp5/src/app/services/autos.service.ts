import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private _http:HttpClient) { }

  public getCars():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}),
    } 
    return this._http.get("https://car-specs.p.rapidapi.com/v2/cars/makes", httpOptions); 
  } 
  public getModels(id: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}),
    } 
    return this._http.get(`https://car-specs.p.rapidapi.com/v2/cars/makes/${id}/models`, httpOptions); 
  }
}
