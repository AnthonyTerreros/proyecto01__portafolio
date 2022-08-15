import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpclient: HttpClient) { }

  getProductos() {
    return this.httpclient.get('http://localhost:3000/api/productos')
  }

  getProductoPorId(id: number) {
    return this.httpclient.get(`http://localhost:3000/api/productos/${id}`)
  }

}
