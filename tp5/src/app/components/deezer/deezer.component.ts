import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'app-deezer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './deezer.component.html',
  styleUrl: './deezer.component.css'
})
export class DeezerComponent {
  currentTime: number = 0;
  buscar: String="";
  vacio: String="";
  cancion: any;
  canciones: any[]= [];
  mostrarElemento: boolean = false;


  constructor(private deezerService: DeezerService) {}

  obtenerBusqueda(){
    if(this.buscar==="")
      this.vacio="Debe completar el campo antes de realizar una busqueda";
    else
      this.deezerService.getBusqueda(this.buscar).subscribe(
        (resultado:any) => {
          for (let index = 0; index < 3; index++) {
            this.cancion={
              id: resultado.data[index].id,
              titulo: resultado.data[index].title,
              artista: resultado.data[index].artist.name,
              img: resultado.data[index].album.cover_medium,
              musica: resultado.data[index].preview
            }
            this.canciones.push(this.cancion);
          }
          this.mostrarBusqueda();
        },
        (error) => {
          console.log(error);
        }
      );
  } 
  

  mostrarBusqueda(): void {
    this.mostrarElemento = true;
  }
}
