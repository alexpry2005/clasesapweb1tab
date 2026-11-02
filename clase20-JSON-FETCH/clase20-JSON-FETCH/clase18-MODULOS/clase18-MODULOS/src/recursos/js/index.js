import { filtrarPorTalle, renderizarCatalogo } from './funciones.js'
import { URL_PRODUCTOS } from './config.js'

const productosEnCarro = []
const contenedorProductos = document.getElementById('contenedor-productos')
const contadorProductos = document.getElementById('productos-selecionados')
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')

async function cargarProductos() {
    try {
        const respuesta = await fetch(URL_PRODUCTOS)
        if (!respuesta.ok) {
            throw new Error(`No se pudieron cargar los productos (${respuesta.status})`)
        }

        const datos = await respuesta.json()
        const productosFiltrados = filtrarPorTalle(datos.productosMascotas, 'M')
        renderizarCatalogo(contenedorProductos, productosFiltrados)
    } catch (error) {
        contenedorProductos.innerHTML = '<p role="alert">No se pudo cargar el catálogo. Intenta nuevamente más tarde.</p>'
        console.error(error)
    }
}

botonEvento.addEventListener('click', () => dialogo.showModal())

contenedorProductos.addEventListener('click', (evento) => {
    const boton = evento.target.closest('.boton-agregar-producto')
    if (!boton) return

    productosEnCarro.push(Number(boton.dataset.id))
    contadorProductos.textContent = productosEnCarro.length
})

cargarProductos()
