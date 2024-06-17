import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  destacados: Producto[][];
  productos: Producto[];
 
  constructor(private productoService: ProductoService,private router: Router){
    this.destacados=[];
    this.productos=[];
  }

  ngOnInit() {
    this.obtenerProductosDestacados();
    this.obtenerProductos();
  }
/**Producto nuevo */
  productoNuevo(): void {
    this.router.navigate(['/producto-form',0]);
  }
  /**Modificar producto */
  modificar(_id:String): void {
    this.router.navigate(['/producto-form/',_id]);
    this.obtenerProductosDestacados();
  }
/**Coloca los productos en una matriz*/
  listarDestacados(productos: any[]): void {
    let i=0,j=0,posProd=0;

    while(posProd<productos.length){
      if(j===3){
        i++;
        j=0;
      }
      if(!this.destacados[i]){
        this.destacados[i]=[];
      }
      this.destacados[i][j]=productos[posProd];
      j++;
      posProd++;
    }
  }
//SERVICIOS
/**Retorna un lista de productos.*/
  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      (resultado: any) => {
        console.log(resultado);
        this.productos=resultado;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Elimina un producto por id.*/
  eliminarProducto(id: String): void {
    this.productoService.deleteProducto(id).subscribe(
      (resultado: any) => {
        console.log(resultado);
        this.productos = this.productos.filter(p => p._id!== id);
        this.destacados = this.destacados.map(element => element.filter(p => p._id!== id));
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
        this.listarDestacados(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}