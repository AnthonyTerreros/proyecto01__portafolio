import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Producto } from '../interfaz/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('content') content: Producto = {
    categoriaId: -1,
    id: -1,
    nombre: "",
    precio: 0,
    stock: 0,
    url_image: "",
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSendData() {
    this.router.navigateByUrl(`/inicio/${this.content.id}`);
  }
}
