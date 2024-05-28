export class Palabra {
    palabra: string;
    cantVocales: number;
    cantConsonantes: number;
    cantSilabas: number;
    
    constructor(palabra: string, cantVocales: number, cantConsonantes: number, cantSilabas: number) {
        this.palabra = palabra;
        this.cantVocales = cantVocales;
        this.cantConsonantes = cantConsonantes;
        this.cantSilabas = cantSilabas;
    }
}
