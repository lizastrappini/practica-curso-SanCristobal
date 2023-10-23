//Implemente su propia función filter

//devuelvo un nuevo array con las palabras que contengan la cadena "script"
var arreglo = ['hola', 'javascript', 'typescript', 'js'];
var palabrasEncontradas = []; 

function MyFilter(array, condicion){
    for(i=0; i<arreglo.length; i++){
        if(condicion(array[i])){
            palabrasEncontradas.push(array[i]);
        }
    }
    return palabrasEncontradas;
}

var palabrasEncontradas = MyFilter(arreglo, function(elemento){
    if(elemento.includes("script")){
        return elemento;
    }
})

var palabrasEncontradas2 = arreglo.filter((elemento) => elemento.includes("script"))


console.log("arreglo original: ",arreglo)
console.log("funcion MyFilter: ", palabrasEncontradas)
console.log("funcion filter de js: ",palabrasEncontradas2)
