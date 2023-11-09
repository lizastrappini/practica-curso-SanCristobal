//Implemente su propia función reduce

//devuelvo la cantidad de letras totales del arreglo

var arreglo = ['hola', 'javascript', 'typescript', 'js'];


function MyReduce(array, condicion){
    var acumulador =0;
    for(i=0; i<array.length; i++){
        acumulador = condicion(acumulador, array[i]);
    }
    return acumulador;
}

var nuevaCadena = MyReduce(arreglo, function(acumulador, elemento){
    return acumulador + elemento.trim().length;
})

var nuevaCadena2 = arreglo.reduce((acumulador, elemento) => acumulador + elemento.trim().length, 0);

console.log("arreglo original: ",arreglo)
console.log("funcion MyReduce: ", nuevaCadena)
console.log("funcion reduce de js: ",nuevaCadena2)