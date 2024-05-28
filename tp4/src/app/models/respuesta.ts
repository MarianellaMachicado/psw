import { Palabra } from "./palabra";

export class Respuesta {
    palabra: Palabra;   
    categoria: String;  
    opcionElegida: number;
    acerto: boolean;

    constructor(palabra: Palabra, categoria: String, opcionElegida: number){
        this.palabra = palabra;
        this.categoria = categoria;
        this.opcionElegida = opcionElegida;
        this.acerto = false;
    }
}
