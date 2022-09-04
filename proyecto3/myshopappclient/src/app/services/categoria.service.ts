import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url: string = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.url}/categorias`)
  }
}
