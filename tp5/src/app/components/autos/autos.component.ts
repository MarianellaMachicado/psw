import { Component } from '@angular/core';
import { Auto } from '../../models/auto';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  auto!: Auto;
  autos: Auto[]=[];
  modelos: Auto[] = [];

  constructor(private autosService: AutosService){}
  ngOnInit(): void {
   this.obtenerAutos();
  }
  obtenerAutos(): void {
    this.autosService.getCars().subscribe(
      (resultado: any) => {
        for (let i = 0; i < 8; i++) {
          this.auto = new Auto(
            resultado[i].id,
            resultado[i].name,""
          );
          this.autos.push(this.auto);
        }
        console.log(this.autos);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  obtenerModelos(id: String):  {
    this.autosService.getModels(id).subscribe(
      (resultado: any) => {
        for (let i = 0; i < 8; i++) {
          this.auto = new Auto(
            resultado[i].id,
            resultado[i].name,""
          );
          this.autos.push(this.auto);
        }
        console.log(this.autos);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
