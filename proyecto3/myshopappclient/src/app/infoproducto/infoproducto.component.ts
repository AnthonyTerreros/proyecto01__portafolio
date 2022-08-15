import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../interfaz/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-infoproducto',
  templateUrl: './infoproducto.component.html',
  styleUrls: ['./infoproducto.component.css'],
})
export class InfoproductoComponent implements OnInit {
  producto: Producto = {
    categoriaId: -1,
    id: -1,
    nombre: '',
    precio: 0,
    stock: 0,
    url_image: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService: ProductosService
  ) {}

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    let id = params['id'];

    this.productoService.getProductoPorId(id).subscribe((res) => {
      this.producto = res as Producto;
    });
  }
}
