import { Component } from '@angular/core';
import { Autor } from '../../models/autor';
import { BibliotecaService } from '../../services/biblioteca.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
  autor!: Autor;
  autores: Autor[] = [];
  autorMasInfo: Autor = new Autor("","","","",[]);
  mostrarBoton: boolean = true;

  constructor(private bibliotecaService: BibliotecaService){}
  
  obtenerAutores(): void {
    this.bibliotecaService.getAuthors().subscribe(
      (resultado: any) => {
        for (let i = 0; i < 8; i++) {
          this.autor = new Autor(
            resultado[i].author_id,
            resultado[i].name,
            resultado[i].image,
            "",
            []
          );
          this.autores.push(this.autor);
        }
        this.mostrarBoton = false;
        console.log(this.autores);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
  masInfoAutorPorId(id: String){
    let libros: String[] = [];
    this.bibliotecaService.getMoreInfoByIdAutor(id).subscribe(
      (resultado:any) => {
        for (let index = 0; index < resultado.author_books.length; index++) {
          libros.push(resultado.author_books[index].name); 
        };
        this.autorMasInfo = new Autor(
          resultado.author_id,
          resultado.name,
          resultado.image,
          resultado.info,
          libros
        )
      },
      (error) => {
        console.log(error);
      }
    );
  };
}