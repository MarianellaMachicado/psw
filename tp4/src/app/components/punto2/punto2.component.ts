import { Component } from '@angular/core';
import { Palabra } from '../../models/palabra';
import { CommonModule } from '@angular/common';
import { Respuesta} from '../../models/respuesta';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  categoria !: String;
  palabra !: Palabra;
  respuesta !: Respuesta;
  categorias : string[];
  palabras !: Array<Palabra>;
  opciones !: number[];
  respuestas: Array<Respuesta>;
  botonesHabilitados: boolean;
  mostrarBotonJugar: boolean;

  constructor(){
    this.categorias = ['VOCALES','CONSONANTES','LETRAS','SILABAS'];
    this.respuestas = new Array<Respuesta>();
    this.botonesHabilitados = false;
    this.mostrarBotonJugar = true;
    this.cargarPalabras();
    this.cargarJuego();
  }
  /**Carga un arreglo con palabras y caracteristicas como la cantidad de vocales, consonantes y silabas que posee cada palabra.*/
  cargarPalabras():void{
    this.palabras = new Array<Palabra>();
    this.palabras.push(new Palabra("Globo",2,3,2));
    this.palabras.push(new Palabra("Puerta",3,3,2));
    this.palabras.push(new Palabra("Tren",1,3,1));
    this.palabras.push(new Palabra("Rana",2,2,2));
    this.palabras.push(new Palabra("Manzana",3,4,3));
    this.palabras.push(new Palabra("Montaña",3,4,3));
    this.palabras.push(new Palabra("Barco",2,3,2));
    this.palabras.push(new Palabra("Mochila",3,4,3));
    this.palabras.push(new Palabra("Lápiz",2,3,2));
    this.palabras.push(new Palabra("Fútbol",2,4,2));
  }
  /**Carga la opcion, la palabra y las respuestas para jugar*/
  cargarJuego(): void{
    this.palabra = this.palabraRandom();
    this.categoria = this.categoriaRandom();

    switch(this.categoria){
      case 'VOCALES': this.cargarOpciones(this.palabra.cantVocales); break;
      case 'CONSONANTES': this.cargarOpciones(this.palabra.cantConsonantes);break;
      case 'SILABAS': this.cargarOpciones(this.palabra.cantSilabas);break;
      default: this.cargarOpciones(this.palabra.palabra.length); break;
    }
  }
  /**Retorna una opcion al azar del array que contiene las opciones.*/
  categoriaRandom() : string{
    return this.categorias[Math.floor(Math.random()*this.categorias.length)];
  }
  /**Retorna una palabra al azar del arreglo que contiene las opciones.*/
  palabraRandom() : Palabra{
    return this.palabras[Math.floor(Math.random()*this.palabras.length)];
  }
  /**Carga en el arreglo respuestas con la respuesta correcta a la palabra asignada junto con otros valores al azar.*/
  cargarOpciones(respCorrecta: number): void {
    this.opciones = [];
    let numRandom;
    this.opciones [0] = respCorrecta;

    for (let i = 1; i < 4; i++) {
      numRandom = Math.floor(Math.random() * 10)+1;
      if(!this.estaRepetido(numRandom)) {
        this.opciones[i] = numRandom;
      }else
        i--;
    }
    this.opciones.sort(function(a, b){return 0.5 - Math.random()});
  }
  /**Retorna true si el valor ya se encuentra en el arreglo respuestas, false en caso contrario.*/
   estaRepetido(valor: number):boolean{
    let encontrado=false
    let i=this.opciones.length;

    while(!encontrado && i>0){
      if(valor === this.opciones[i-1])
        encontrado=true;
      i--;
    }
    return encontrado;
   }
   jugar():void{
    this.botonesHabilitados=true;
    this.mostrarBotonJugar=false;                                                     
    this.cargarJuego();
   }
   /**Guarda el historial de respuestas del jugador */
  guardarRespuesta(opcionElegida: number): void {    
    if(this.botonesHabilitados){
      this.respuesta = new Respuesta(this.palabra,this.categoria,opcionElegida);
  
      switch(this.categoria){
        case 'VOCALES': this.acerto(this.palabra.cantVocales); break;
        case 'CONSONANTES': this.acerto(this.palabra.cantConsonantes);break;
        case 'SILABAS': this.acerto(this.palabra.cantSilabas);break;
        default: this.acerto(this.palabra.palabra.length); break;
      }
      this.respuestas.push(this.respuesta);
      console.log(this.respuestas);
      this.botonesHabilitados=false;
    }else
      console.log('botones deshabilitados')
  }
  /**Modifica el parametro del objeto respuesta si el valor que contiene el objeto palabra es igual a la opcion elegida.*/
  acerto(valor: number):void{
    if(valor===this.respuesta.opcionElegida)
      this.respuesta.acerto=true;
  }
}