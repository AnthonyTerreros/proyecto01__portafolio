import { Component, OnInit } from '@angular/core';
import { Categoria } from '../interfaz/categoria';
import { Producto } from '../interfaz/producto';

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
  
  constructor() { }

  ngOnInit(): void {

  }

  changeSelect() {

  }

}
