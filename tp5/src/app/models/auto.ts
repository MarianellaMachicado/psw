export class Auto {
    id: String = "";
    nombre: String = "";
    modelos?: String[] = [];

    constructor(id: String,nombre: String,modelos?: String[]) {
        this.id = id;
        this.nombre = nombre;
        this.modelos = modelos;
    }
    
}
