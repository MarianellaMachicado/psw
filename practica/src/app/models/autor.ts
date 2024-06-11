export class Autor {
    id: String = "";
    nombre: String = "";
    foto: String = "";
    bibliografia: String = "";
    libros: String[] = [];

    constructor(id: String, nombre: String, foto: String, bibliografia: String,libros: String[]){
        this.id = id;
        this.nombre = nombre;
        this.foto = foto;
        this.bibliografia = bibliografia;
        this.libros = libros;
    }
}
