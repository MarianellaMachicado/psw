export class Producto {
    _id: String;
    nombre?: String;
    descripcion?: String;
    imagen?:String;
    precio?: Number; 
    stock?: Number;
    destacado?: Boolean;

    constructor(){
        this._id = "";
        this.nombre = "";
        this.descripcion = "";
        this.imagen = "";
        this.precio = 0;
        this.stock = 0;
        this.destacado = false;
    }
}
