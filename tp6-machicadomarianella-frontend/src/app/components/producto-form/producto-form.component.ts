import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {
  producto!: Producto;
  accion!: String;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router)
  {
    this.initVars();
  }
  initVars(){
    this.producto = new Producto();
    this.accion = 'new';
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']=='0') {
        this.accion="new";
      }else{
        this.accion="update";
        this.obtenerProducto(params['id']);
      }
    });
  }
  actualizar(): void {

  }

  /**Retorna un producto por id.*/
  obtenerProducto(id:String): void{
    console.log(id);
    this.productoService.getProducto(id).subscribe(
      (resultado: any) => {
        console.log(resultado);
        this.producto = resultado;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  /**Crea un producto.*/
  crearProducto(): void {
    let producto= {
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      imagen: "assets/img/no-imagen.png",
      precio: this.producto.precio,
      stock: this.producto.stock,
      destacado: this.producto.destacado
    }
    this.productoService.createProducto(producto).subscribe(
      (resultado: any) => {
        console.log(resultado);
        this.router.navigate(['/productos']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
   /** Modifica los datos de un producto por id.*/
  modificarProducto(): void {
    console.log(this.producto);
    this.productoService.editProducto(this.producto).subscribe(
      (resultado: any) => {
        this.router.navigate(['/productos']);
        console.log(resultado);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
