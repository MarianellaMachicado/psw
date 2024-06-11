export class Receta {
    path: String;
    categoria: String;
    titulo: String;
    imagen: String;
    ingredientes: String[];
    pasos: String[];

    constructor(path: String, categoria: String, titulo: String, imagen: String, ingredientes: String[], pasos: String[]) {
        this.path = path;
        this.categoria = categoria;
        this.titulo = titulo;
        this.imagen = imagen;
        this.ingredientes = ingredientes;
        this.pasos = pasos;
    }
}
