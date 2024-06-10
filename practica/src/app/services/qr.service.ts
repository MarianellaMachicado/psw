import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  constructor(private _http:HttpClient) { }

  public getQr(content: String): Observable<Blob> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'qr-code-generator146.p.rapidapi.com',
        'X-RapidAPI-Key': '56df3ddd99msh6b20be86e45ebb1p12eef5jsn36f88fd49161',
      }),
      responseType: 'blob' as 'json'  // Especifica que la respuesta es un blob
    };
    return this._http.get<Blob>('https://qr-code-generator146.p.rapidapi.com/simple.php?content=' + content, httpOptions);
  }
}
