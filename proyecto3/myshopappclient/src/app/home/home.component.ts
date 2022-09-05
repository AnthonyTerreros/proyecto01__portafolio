import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaz/producto';
import { ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title_info: string = "Home";

  productos: any = [];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(repuesta => {
      this.productos = repuesta 
    })
  }

}
