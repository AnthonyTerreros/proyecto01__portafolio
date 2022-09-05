import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../interfaz/producto';
import { CarroService } from '../services/carro.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-infoproducto',
  templateUrl: './infoproducto.component.html',
  styleUrls: ['./infoproducto.component.css'],
})
export class InfoproductoComponent implements OnInit {
  producto: Producto = {
    categorium: {
      id: -1,
      name: "",
      descripcion: "",
      createdAt: "",
      updatedAt: ""
    },
    id: -1,
    nombre: '',
    precio: 0,
    stock: 0,
    url_image: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService: ProductosService,
    private carrito: CarroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    let id = params['id'];

    this.productoService.getProductoPorId(id).subscribe((res) => {
      this.producto = res as Producto;
    });
  }

  agregarAlCarro() {
    this.carrito.addToCart(this.producto);
    this.router.navigate(['inicio'])
  }
}
