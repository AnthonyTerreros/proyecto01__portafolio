import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url: string = "http://localhost:3000/api"
  auth_token: any = localStorage.getItem('token')

  constructor(private http: HttpClient) { }

  getCategorias() {
    const headers: any = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`,
    })
    return this.http.get(`${this.url}/categorias`, {headers: headers})
  }
}
