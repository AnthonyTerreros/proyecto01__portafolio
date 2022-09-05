import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interfaz/item';
import { Producto } from '../interfaz/producto';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-itemscarrito',
  templateUrl: './itemscarrito.component.html',
  styleUrls: ['./itemscarrito.component.css']
})
export class ItemscarritoComponent implements OnInit {

  @Input() producto: Producto = {
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
    url_image: "",
  };

  item: Item = {
    producto: this.producto,
    cantidad: 1
  }

  constructor(private carrito: CarroService) { 
    
  }

  ngOnInit(): void {
    
  }

  sumarItem() {
    this.item.cantidad++;
  }

  restarItem() {
    this.item.cantidad--;
  }

}
