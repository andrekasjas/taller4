import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(public http: HttpClient) { }
  
  prueba() {
  return new Promise(resolve => {
    this.http.get('http://127.0.0.1:8000/api/foo').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
}
