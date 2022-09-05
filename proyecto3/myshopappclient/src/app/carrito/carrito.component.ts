import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaz/producto';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  title: string = 'Compras';
  productos: Producto[];
  total: number;

  constructor(protected carrito: CarroService) {
    this.productos = this.carrito.getItems();
    this.total = this.carrito.getToal();
  }

  ngOnInit(): void {
  }

  
}
