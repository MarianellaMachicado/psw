import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  constructor(private productoService: ProductoService){}
/**Retorna un lista de productos.*/
  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Crea un producto.*/
  crearProducto(): void {
    let producto= {
      nombre: "Sudadera con Capucha",
      descripcion: "Sudadera calentita y confortable con capucha.",
      imagen: "assets/img/no-imagen.png",
      precio: 59.99,
      stock: 50,
      destacado: true
    }
    this.productoService. createProducto(producto).subscribe(
      (resultado: any) => {
        
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
/**Retorna un producto por id.*/
  obtenerProducto(): void {
    let id = "6669f42e32b57aba47666ac7";
    this.productoService.getProducto(id).subscribe(
      (resultado: any) => {

        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Elimina un producto por id.*/
  eliminarProducto(): void {
    let id = "666a5c5e7e99602883f171d5";//eliminado
    this.productoService.deleteProducto(id).subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /** Modifica los datos de un producto por id.*/
  modificarProducto(): void {
    let producto= {
      _id : "6669f42e32b57aba47666ac7",
      nombre: "Camiseta Deportiva",
      destacado: false
    }
    this.productoService.editProducto(producto).subscribe(
      (resultado: any) => {
        
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Retorna un lista de productos destacados.*/
  obtenerProductosDestacados(): void {
    this.productoService.getProductosDestacados().subscribe(
      (resultado: any) => {
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
