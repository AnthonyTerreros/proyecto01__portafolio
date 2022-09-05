import { Component, OnInit } from '@angular/core';
import { Categoria } from '../interfaz/categoria';
import { Producto } from '../interfaz/producto';
import { CarroService } from '../services/carro.service';
import { CategoriaService } from '../services/categoria.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  title: string = "Buscar";

  selectValue: any = "";

  productos: Array<Producto> = [];

  categorias: Array<Categoria> = [];

  url_images: Array<string> = [
    "/assets/images/foto1.webp",
    "/assets/images/foto2.webp",
    "/assets/images/foto3.webp",
    "/assets/images/juguete.jpg",
    "/assets/images/procesador.jpg",
    "/assets/images/soci.jpg"
  ]
  
  constructor(private productService: ProductosService, private categoriaService: CategoriaService, private carrito: CarroService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe((categorias: any) => {
      this.categorias = categorias as Array<Categoria>
    })
  }

  changeSelect(selectValue: any) {
    let value: string = selectValue.target.value
    this.productService.getProductoPorCategoriaFirebase(value).subscribe((productos: any) => {
      this.productos = productos as Array<Producto>
    });
  }

  agregarAlCarro(product: Producto) {
    this.carrito.addToCart(product)
  }

}
