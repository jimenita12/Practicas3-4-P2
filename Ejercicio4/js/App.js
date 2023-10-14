import Producto from "./Producto.js";

const btnAgregar = document.getElementById('agregar');
const btnEliminar = document.getElementById('eliminar');
const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const inputClaveEliminar = document.getElementById('claveEliminar');
const ulProductos = document.getElementById('productos');
const spanTotalCompra = document.getElementById('totalCompra');

const productos = [];

btnAgregar.addEventListener('click', () => {
    const nombre = inputNombre.value;
    const precio = parseFloat(inputPrecio.value);

    if (nombre && !isNaN(precio)) {
        const producto = new Producto(nombre, precio);
        productos.push(producto);

        actualizarListaProductos();
        calcularTotalCompra();

        inputNombre.value = '';
        inputPrecio.value = '';
    }
});

btnEliminar.addEventListener('click', () => {
    const claveEliminar = inputClaveEliminar.value;
    if (claveEliminar) {
        const index = productos.findIndex(producto => producto.clave === claveEliminar);
        if (index !== -1) {
            productos.splice(index, 1);
            actualizarListaProductos();
            calcularTotalCompra();
        }
        inputClaveEliminar.value = '';
    }
});

function actualizarListaProductos() {
    ulProductos.innerHTML = '';
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    productos.forEach(producto => {
        ulProductos.innerHTML += `<li>${producto.clave} - ${producto.nombre} - $${producto.precio.toFixed(2)}</li>`;
    });
}

function calcularTotalCompra() {
    const total = productos.reduce((sum, producto) => sum + producto.precio, 0);
    spanTotalCompra.textContent = total.toFixed(2);
}
