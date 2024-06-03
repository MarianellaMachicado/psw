import { Component } from '@angular/core';
import { Auto } from '../../models/auto';
import { AutosService } from '../../services/autos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  auto: Auto = new Auto("","",[]);
  autos: Auto[] = [];
  marca: String="";
  mostrarBoton: boolean = true;

  constructor(private autosService: AutosService){}

  obtenerMarcas(): void {
    this.autosService.getCars().subscribe(
      (resultado: any) => {
        for (let i = 0; i < 8; i++) {
          this.auto = new Auto(
            resultado[i].id,
            resultado[i].name
          );
          this.autos.push(this.auto);
        }
        this.mostrarBoton = false;
        console.log(this.autos);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  obtenerModelos(id: String, marca: String) {
    let modelos: String[]=[];
    this.autosService.getModels(id).subscribe(
      (resultado: any) => {
        for (let index = 0; index < resultado.length; index++) {
          modelos.push(resultado[index].name); 
        };
        this.auto = new Auto(
          id,
          marca,
          modelos
        );
        console.log(this.autos);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
