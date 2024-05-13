export class Producto {
    _id: string;
    nombre: string;
    descripcion: string;
    img: string;
    precio: number;
    stock: number;
    cantidad: number;

    constructor(_id: string, nombre: string, descripcion: string, img: string, precio: number, stock: number,cantidad: number) {
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
        this.stock = stock;
        this.cantidad = cantidad;
    }
}