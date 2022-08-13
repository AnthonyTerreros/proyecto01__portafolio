import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title_info: string = "";

  products: any[] = [
    {name: "Lentes Luis Vuitton", price: 500, url_image: "../../assets/images/foto1.webp"},
    {name: "Camisa Americana para Hombre", price: 20, url_image: "../../assets/images/foto2.webp"},
    {name: "Lentes Luis Vuitton", price: 500, url_image: "../../assets/images/foto1.webp"},
    {name: "Procesador Ryzen 5600G 6 Nucleos 12 Hilos", price: 20, url_image: "../../assets/images/foto2.webp"},
    {name: "Juguete LEGO de cueva de Minecraft.", price: 115, url_image: "../../assets/images/juguete.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
