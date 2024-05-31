import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticia!: Noticia;
  noticias: Noticia[]=[];

  constructor(private noticiasService:NoticiasService){}
  ngOnInit(): void {
   this.obtenerNoticias();
  }
  obtenerNoticias(): void {
    this.noticiasService.getNews().subscribe(
      (resultado: any) => {
        let descripcion,descripcionSoloTexto;
        for (let i = 0; i < 8; i++) {
          descripcion = resultado.data[i].body[i].data.content;
          descripcionSoloTexto = descripcion.replace(/<\/?p>/g, '');
          this.noticia = new Noticia(
            resultado.data[i].title,
            descripcionSoloTexto,
            `${resultado.data[i].image.data.urls.uploaded.gallery}/${resultado.data[i].image.data.id}`
          );
          this.noticias.push(this.noticia);
        }
        console.log(this.noticias);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
