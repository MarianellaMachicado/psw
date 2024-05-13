import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  producto!: Producto;
  productos!: Array<Producto>;
  carrito: Array<Producto>;

  constructor() {
    this.cargarProductos();
    this.carrito = new Array<Producto>();
  }

  /**Inicializa el array productos*/
  cargarProductos():void{
    this.productos = new Array<Producto>();
    this.productos.push(new Producto('1','Smart TV LED 43"','Tus películas y programas favoritos se vuelven reales. Una resolución Full HD intensa y vívida con el doble de resolución que el televisor HD.','assets/tienda/samsung-smart43.jpg',499999,310,0));
    this.productos.push(new Producto('2','Celular S23 FE','Ahora todos pueden acceder a momentos épicos. El Galaxy S23 FE abre la puerta para que más personas experimenten lo extraordinario.','assets/tienda/samsung-s23fe.jpg',1164999,50,0));
    this.productos.push(new Producto('3','Lavarropas Drean NEXT 10.12','Su capacidad de lavado es de 10 Kg y su velocidad de centrifugado es regulable hasta 1200 RPM. Eficiencia energética A+++. Sistema de lavado europeo. Tambor de acero inoxidable.','assets/tienda/lavarropas-drean.jpg',909999,200,0));
    this.productos.push(new Producto('4','Lavarropas Drean NEXT 10.12','Su capacidad de lavado es de 10 Kg y su velocidad de centrifugado es regulable hasta 1200 RPM. Eficiencia energética A+++. Sistema de lavado europeo. Tambor de acero inoxidable.','assets/tienda/lenovo-ideapad.jpg',789999,230,0));
    this.productos.push(new Producto('5','Cafetera Essenza Nespresso','Essenza Mini te permite preparar un café Nespresso hasta en los espacios más reducidos. Una pequeña  máquina de café diseñada para ofrecerte momentos de café inolvidables.','assets/tienda/cafetera-nespresso.jpg',228389,500,0));
    this.productos.push(new Producto('6','PlayStation PS5','Experimenta una velocidad sorprendente de carga con una inmersión más intensa gracias a la SSD de ultra alta velocidad, compatible con retrolimentación háptica, gatillos adaptables y audio 3D, y una generación totalmente nueva de increíbles juegos de PlayStation®.','assets/tienda/ps5.jpg',1394999,800,0))
  }

  /**Agrega un producto al carrito */
  agregarProductoCarrito (productoAgregado: Producto): void{
    productoAgregado.cantidad++;
    if(!this.estaEnCarrito(productoAgregado._id))
      this.carrito.push(productoAgregado);
  }

  /**Quita un producto del carrito */
  quitarProductoCarrito (productoQuitado: Producto): void{ 
    productoQuitado.cantidad--;
    if(productoQuitado.cantidad === 0)
      this.carrito = this.carrito.filter(producto => producto._id!== productoQuitado._id);
  }

  /**Calcula el total a pagar */
  calcularTotal():number{
    return this.carrito.reduce((total,producto) => total + (producto.precio*producto.cantidad),0);
  }

  /**Retorna si el producto ya esa en el carrito */
  estaEnCarrito (id: string): boolean {
    return this.carrito.some(producto => producto._id === id);
  }
}
