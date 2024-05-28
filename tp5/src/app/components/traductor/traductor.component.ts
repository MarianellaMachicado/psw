import { Component } from '@angular/core';
import { TraductorService } from '../../services/traductor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent {
  source: string='';
  target: string='';
  texto: string='';
  textoTraducido: string='';

  botonSourceActivo: string = '';
  botonTargetActivo: string = '';

  constructor(private traductorService: TraductorService){}
  obtenerLenguajes(){
    this.traductorService.getLenguajes().subscribe(
      (data:any) => {
        console.log(data);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  traducirTexto(){
    if(this.botonSourceActivo === this.botonTargetActivo)
      this.textoTraducido=this.texto;
    else{
      this.traductorService.traducirTexto(this.source,this.target,this.texto).subscribe(
        (resultado:any) => {
          console.log(resultado);
          this.textoTraducido = resultado.data.translations[0].translatedText;
        },
        (error:any)=>{
          if (error.status === 429) {
            console.error('Too many requests. Please try again later.');
            // Puedes mostrar un mensaje al usuario
          } else {
            console.error('Error al traducir texto:', error);
          }
        }
      );
    }
  }
  


  targetButton(id: string) {
    this.botonTargetActivo = id;
    this.target = id;
  }
  sourceButton(id: string) {
    this.botonSourceActivo = id;
    this.source = id;
  }
}
