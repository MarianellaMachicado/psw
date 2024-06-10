import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  array!: any[];

  /*Variables para el modal*/
  cargando!: boolean;
  modal!: boolean;
  empleado!: any;
  mostrarCard!: boolean;

  constructor(){
    this.iniciarVariables();
  }
  iniciarVariables(): void{
    this.array = [
      {legajo: 4575,apellido:"Torres",nombre:"Laura",nro_documento:"1234",estado:true,img:"assets/img/imagen.png"},
      {legajo: 3643,apellido:"Hernández",nombre:"Nicolás",nro_documento:"5423",estado:false,img:"assets/img/imagen.png"},
      {legajo: 1123,apellido:"Zoto",nombre:"Federico",nro_documento:"5643",estado:true,img:"assets/img/imagen.png"}
    ]
    this.cargando = false;
    this.modal = false;
    this.empleado = {legajo: 0,apellido:"",nombre:"",nro_documento:"",estado:false,img:""};
    this.mostrarCard = false;
  }

  obtenerEmpleado(legajo: number,esCard: boolean): void{
    this.empleado = this.array.find(o => o.legajo === legajo);
    if(esCard)
      this.mostrarCard = true;
    
  }


}
