// import productos from "./productos.js" // -> no nombrada
import {productosMascotas, categorias} from './productos.js' //-> nombrada
import {filtrarPorTalle,renderizarCatalogo} from './funciones.js'

// Utilizar un objeto disponible para acceder a HTML
// Referenciamos un elemento del html
const contenedorProductos = document.getElementById("contenedor-productos")

// Filtramos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'M')

// Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)

