//Implemente su propia función map

//convierto a mayusculas todas las palabras
var arreglo = ['hola', 'javascript', 'typescript', 'js']

function MyMap(array, funcion){
    var nuevoArreglo = []
    for(i=0; i<array.length; i++){ 
        nuevoArreglo.push(funcion(array[i]))
    }
    return nuevoArreglo;
}

var nuevoArreglo1 = MyMap(arreglo, function(elemento){
    return elemento.toUpperCase();
})

var nuevoArreglo2 = arreglo.map(function(elemento){
    return elemento.toUpperCase();
})

console.log("arreglo inicial: ",arreglo)
console.log("funcion MyMap: ", nuevoArreglo1 )
console.log("funcion map de js: ", nuevoArreglo2)