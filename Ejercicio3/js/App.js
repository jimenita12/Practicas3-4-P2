import Alumno from './Alumno.js';

const btnRegistrar = document.getElementById('registrar');
const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const ulAprobados = document.getElementById('aprobados');
const ulReprobados = document.getElementById('reprobados');

const alumnos = [];

btnRegistrar.addEventListener('click', () => {
    const nombre = inputNombre.value;
    const calificacion = parseFloat(inputCalificacion.value);

    if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 10) {
        const alumno = new Alumno(nombre, calificacion);
        alumnos.push(alumno);

        if (alumno.aprobo()) {
            const li = document.createElement('li');
            li.textContent = `${nombre} - Calificación: ${calificacion}`;
            ulAprobados.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.textContent = `${nombre} - Calificación: ${calificacion}`;
            ulReprobados.appendChild(li);
        }

        inputNombre.value = '';
        inputCalificacion.value = '';
    } else {
        // Muestra un mensaje de error
        const errorMensaje = document.getElementById('mensaje');
        errorMensaje.textContent = 'La calificación no es válida. Debe ser un número entre 0 y 10.';
        // Agrega el mensaje de error al DOM, por ejemplo, dentro de un div con el id 'errores'
        const erroresDiv = document.getElementById('errores');
        erroresDiv.appendChild(errorMensaje);
    }
});
