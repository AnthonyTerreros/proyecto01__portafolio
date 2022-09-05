import { Injectable } from '@angular/core';
import { Item } from '../interfaz/item';
import { Producto } from '../interfaz/producto';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  items: Producto[] = [];

  itemProducto: Item[] = [];
  constructor() {}

  total: number = 0;

  addToCart(product: Producto) {
    this.total = this.calculate()
    this.items.push(product);
  }

  addItem(item: Item) {
    this.total = this.calculate()
    this.itemProducto.push(item);
  }

  getItemsProducto() {
    return this.itemProducto;
  }

  getItems() {
    return this.items;
  }

  getToal() {
    return this.total;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  clearItems() {
    this.itemProducto = [];
    return this.itemProducto;
  }

  calculate() {
    let arr = this.itemProducto.map(item => item.producto.precio)
    let arr2 = this.itemProducto.map(item => item.cantidad)
    let total = 0;
    for(let i = 0; i < this.itemProducto.length; i++) {
      total += arr[i] * arr2[i];
    }
    return total
  }
}
