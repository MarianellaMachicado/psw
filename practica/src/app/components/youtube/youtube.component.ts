import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent {
  buscar: string="";
  mostrarElemento!: boolean;
  videos!: any[];

  constructor(private youtubeService: YoutubeService) {
    this.videos=[];
    this.mostrarElemento=false;
  }
  mostrarBoton: boolean = true;

  obtenerBusqueda(){
      this.youtubeService.getSearch(this.buscar).subscribe(
        (resultado:any) => {
          this.videos= [
            {id:resultado.videos[0].video_id, titulo:resultado.videos[0].title,enlace:"",canal:resultado.videos[0].channel_id}
          ]

            console.log(this.videos)
            this.mostrarBoton = false;
            this.mostrarElemento = true
        },
        (error) => {
          console.log(error);
        }
      );
  } 
}
