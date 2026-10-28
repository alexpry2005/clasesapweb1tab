// import productos from "./productos.js" // -> no nombrada
import {productosMascotas, categorias} from './productos.js' //-> nombrada
import {filtrarPorTalle,renderizarCatalogo} from './funciones.js'

//productosFiltrados.productosMascotas
const productosEnCarro = [] //arreglo vacio para almacenar los productos que se agregan al carro

// Utilizar un objeto disponible para acceder a HTML
// Referenciamos un elemento del html
const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById(`boton-evento`)
const dialogo = document.getElementById(`dialogo`)

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