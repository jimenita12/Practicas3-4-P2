export default class Alumno {
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    aprobo() {
        return this.calificacion >= 7;
    }
}
