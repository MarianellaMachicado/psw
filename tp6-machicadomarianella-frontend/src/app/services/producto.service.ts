import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlProductos: string = "http://localhost:3000/api/producto/";
  constructor(private _http:HttpClient) { }
  /**Retorna un lista de productos.*/
  public getProductos():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlProductos, httpOptions); 
  }
  /**Crea un producto.*/
  public createProducto(producto: Producto):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    const body = producto;
    return this._http.post(this.urlProductos,body, httpOptions); 
  }
  /**Retorna un producto por id.*/
  public getProducto(id: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlProductos+id, httpOptions); 
  }
  /**Elimina un producto por id.*/
  public deleteProducto(id: String):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.delete(this.urlProductos+id, httpOptions); 
  }
  /** Modifica los datos de un producto por id.*/
  public editProducto(producto: Producto):Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    const body = producto;
    return this._http.put(this.urlProductos+producto._id,body, httpOptions); 
  }
  /**Retorna un lista de productos destacados.*/
  public getProductosDestacados():Observable<any>{ 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      }),
    } 
    return this._http.get(this.urlProductos+"destacados/", httpOptions); 
  }
}
