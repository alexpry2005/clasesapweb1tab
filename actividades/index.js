const personas = [
    {
        nomre: "Alex",
        edad : 20
    },
    {
        nombre : "jose",
        edad : 21
    },
    {
        nombre : "camila",
        edad : 25
    },

]
 
//for each -> no me devuelve nada
//personas.forEach((elementoDelArreglo,indice,arreglo)=>{
        //console.log(elementoDelArreglo.edad,indice,arreglo)
//})

//map devuelve un nuevo arreglo
//const nuevoArregloPersonas = personas.map((elementoDelArreglo,indice,arreglo)=>{
    //return {
        //... personas,
        //edad: personas.edad +1
    //}
//})
//console.log(nuevoArregloPersonas)
//filter tabien devuelve un nuevo arreglo
//const nuevoArregloPersonas= personas.filter((personas,indice,arreglo)=>{
    //return personas.edad > 20
//})
//console.log(nuevoArregloPersonas)
//find devuelve el primer elemento q cumle la condiciom
const nuevoArregloPersonas=personas.find((personas,indice,arreglo)=>{
return personas.edad > 20
})
console.log(nuevoArregloPersonas)

