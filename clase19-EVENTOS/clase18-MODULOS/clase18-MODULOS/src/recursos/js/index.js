// import productos from "./productos.js" // -> no nombrada
//import {productosMascotas, categorias} from './productos.js' //-> nombrada
import {filtrarPorTalle,renderizarCatalogo, obtenerDatos} from './funciones.js'

//productosFiltrados.productosMascotas
const productosEnCarro = [] //arreglo vacio para almacenar los productos que se agregan al carro

// Utilizar un objeto disponible para acceder a HTML
// Referenciamos un elemento del html
const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById(`boton-evento`)
const dialogo = document.getElementById(`dialogo`)

//Obtener datos
obtenerDatos(`./recursos/datos/productos.json`)

// Filtramos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'M')

// Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)

//Eventos
botonEvento.addEventListener(`click`, (evento)=>{
      //console.log(evento)
      //dialogo.show()
      dialogo.showModal()
    })

    //aplicar escuchadores a los botones de los productos
   const botonesProductos = contenedorProductos.querySelectorALL(`.boton-agregar-producto`)
     //consol.log(botonesProductos)

     botonesProductos.forEach((boton) => {
             boton.addEventListener(`click`, (evento)=>{
                 //cuerpo del callback
                 const idProducto = parseInt(boton.dataset.id)
                 //console.log(idProducto)  
                 productosEnCarro.push(idProducto)
                 console.log(productosEnCarro)  
                 productosSeleccionados.textContent = productosEnCarro.length
             }) 
     })


import { filtrarPorTalle, obtenerDatos } from './funciones.js';

async function iniciarApp() {
    
    //ejemplo de url
    const urlJSON = './productos.json'; 

    console.log("Cargando datos...");
    const datos = await obtenerDatos(urlJSON);

    if (datos && datos.productosMascotas) {
        // Probamos la función de filtrar por talle (por ejemplo, buscamos los talles "M")
        const productosTalleM = filtrarPorTalle(datos.productosMascotas, "M");
        
        console.log("Productos filtrados por talle M:", productosTalleM);
    }
}

iniciarApp();