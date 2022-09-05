import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Producto } from '../interfaz/producto';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('content') content: Producto = {
    categorium: {
      id: -1,
      name: "",
      descripcion: "",
      createdAt: "",
      updatedAt: ""
    },
    id: -1,
    nombre: "",
    precio: 0,
    stock: 0,
    url_image: "https://random.imagecdn.app/150/150",
  };

  constructor(private router: Router, private carrito: CarroService) {}

  ngOnInit(): void {}

  onSendData() {
    this.router.navigateByUrl(`/inicio/${this.content.id}`);
  }

  agregarAlCarro() {
    this.carrito.addToCart(this.content);
  }
}
