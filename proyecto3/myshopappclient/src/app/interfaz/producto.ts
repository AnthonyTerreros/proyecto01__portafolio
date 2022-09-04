import { Categoria } from "./categoria";

export interface Producto {
    categorium: Categoria;
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    url_image: string;
}
