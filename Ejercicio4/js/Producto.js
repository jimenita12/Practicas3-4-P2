export default class Producto {
    static claveCounter = 1;

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.clave = Producto.claveCounter.toString().padStart(3, '0');
        Producto.claveCounter++;
    }
}
