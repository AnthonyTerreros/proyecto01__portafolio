import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  URL_FIREBASE = "https://myshopapp-tg-default-rtdb.firebaseio.com/productos.json";

  constructor(private httpclient: HttpClient) {}

  getProductos() {
    return this.httpclient.get('http://localhost:3000/api/productos');
  }

  getProductoPorId(id: number) {
    return this.httpclient.get(`http://localhost:3000/api/productos/${id}`);
  }

  getProductoPorCategoriaFirebase(valor: string) {
    return this.httpclient.get(`${this.URL_FIREBASE}`)
    .pipe(
      map((productos: any) => productos.filter((product: any) => product.categorium.name === valor, toArray()))
    );
  }
}
