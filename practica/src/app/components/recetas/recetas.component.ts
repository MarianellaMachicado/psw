import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Receta } from '../../models/receta';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  mostrarBoton: boolean = true;
  cargando: boolean = false;
  modal: boolean = false;
  recetas: Receta[] = [];
  recetaDetalle: Receta = new Receta("","","","",[],[]);


  constructor(private recetasService: RecetasService) {}
  obtenerRecetas(): void {
    this.cargando=true;
    this.recetasService.getRecipesPopular().subscribe(
      (resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          let receta = new Receta(
            resultado[i].path,
            resultado[i].newCategory,
            resultado[i].title,
            resultado[i].image,
            [],
            []
          );
         
          console.log(receta);
          this.recetas.push(receta);
        }
        this.cargando=false;
        this.mostrarBoton = false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
 obtenerRecetaDetalles(path: String, categoria: String): void {
    this.cargando=true;
    this.modal=true;
    this.recetasService.getRecipeDetails(path).subscribe(
      (resultado: any) => {
        this.recetaDetalle = new Receta(
          path,
          categoria,
          resultado["Titulo de la preparacion"],
          resultado["Imagen de la receta"],
          resultado.Ingredientes,
          resultado["Pasos de preparacion"]
        )
        console.log(this.recetaDetalle);
        this.cargando=false;
        this.modal=false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}