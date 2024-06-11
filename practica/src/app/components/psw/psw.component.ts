import { Component } from '@angular/core';
import { PswService } from '../../services/psw.service';
import { CommonModule } from '@angular/common';
import { Psw } from '../../models/psw';

@Component({
  selector: 'app-psw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './psw.component.html',
  styleUrl: './psw.component.css'
})
export class PswComponent {
  mostrarBoton!: boolean;
  estrellas!: any[];
  star!:Psw;
  vacio!:boolean;

  constructor(private pswService: PswService){
    this.mostrarBoton = true;
    this.estrellas=[];
    this.star=new Psw();
    this.vacio=false
  }
  obtenerEstrellas(): void {
  
    this.pswService.getStars().subscribe(
      (resultado: any) => {
        for (let i = 0; i < 5; i++) {
          let estrella={id: resultado[i].id, nombre: resultado[i].name}
          this.estrellas[i]=estrella;
        }
        console.log(resultado);
        this.mostrarBoton = false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  obtenerEstrella(id:String): void {
  let aux: String[]=[];
    this.pswService.getStarDetails(id).subscribe(
      (resultado: any) => {
        console.log(resultado);
        for (let i = 0; i < resultado.planets.length; i++) {
          aux.push(resultado.planets[i].name);
        }
        console.log(aux);
        this.star={nombre:resultado.name,planetas:aux};
        if (aux.length===0){
          this.vacio=true;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
