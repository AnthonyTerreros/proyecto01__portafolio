import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  auth_token: any = localStorage.getItem('token');

  constructor(private httpclient: HttpClient) {}

  getProductos() {
    console.log(this.auth_token);
    // const headers: any = new Headers({
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${this.auth_token}`,
    // });
    return this.httpclient.get('http://localhost:3000/api/productos');
  }

  getProductoPorId(id: number) {
    // const headers: any = new Headers({
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${this.auth_token}`,
    // });
    return this.httpclient.get(`http://localhost:3000/api/productos/${id}`);
  }
}
