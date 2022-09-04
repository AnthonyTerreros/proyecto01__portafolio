import { Component, OnInit } from '@angular/core';
import { Categoria } from '../interfaz/categoria';
import { Producto } from '../interfaz/producto';
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
  
  constructor(private productService: ProductosService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe((categorias: any) => {
      this.categorias = categorias as Array<Categoria>
    })
  }

  changeSelect(selectValue: any) {
    let value: string = selectValue.target.value
    console.log(value)
    this.productService.getProductoPorCategoriaFirebase(value).subscribe((productos: any) => {
      console.log(productos)
      this.productos = productos as Array<Producto>
    });
  }

}
