
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private _http:HttpClient) { }

  public getRecipesPopular():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com', 
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161'}),
    } 
    return this._http.get("https://recipe-book2.p.rapidapi.com/recipes-popular", httpOptions); 
  }
  public getRecipeDetails(path: String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com',
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161',
      })
    };
    return this._http.get('https://recipe-book2.p.rapidapi.com/recipe-details?path='+path,httpOptions);
  }
}