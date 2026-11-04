// import productos from "./productos.js" // -> no nombrada
import {URL_PRODUCTOS} from './config.js'
import obtenerDatos from './productos.js'
//import productosMascotas from './productos.js'
import {filtrarPorTalle,renderizarCatalogo} from './funciones.js'




console.log("cargado")
//Persistencia...
//localStorage.setItem(`numero`, 123)
//localStorage.getItem("numero")
//console.log(numero)

const numeros = [1,2,3,4]
const conviertoAcadena = JSON.stringify(numeros)
//const conviertoAcadena = "[1,2,3,4]"
localStorage.setItem("numeros", conviertoAcadena)
const miNumeros = localStorage.getItem("numeros")
const convertirEnObjeto = JSON.parse(miNumeros)
console.log( convertirEnObjeto)


const productosMascotas = await obtenerDatos(URL_PRODUCTOS)


//CALLBACK  
//obtenerDatos(URL_PRODUCTOS).then(()=>{
    //va todo lo que dependa de la solucion del fetch
    //......
//})

// productos.productosMascotas
const productosEnCarro = []

// Utilizar un objeto disponible para acceder a HTML
// Referenciamos un elemento del html
const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')
const productosSeleccionados = document.getElementById('productos-seleccionados')

// Asignar datos a productosMascotas
// const productosMascotas = productos

// Filtramos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'M')

// Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)



// Eventos
botonEvento.addEventListener('click', (evento)=>{
    // console.log(evento)
    // dialogo.show()
    dialogo.showModal()
})
