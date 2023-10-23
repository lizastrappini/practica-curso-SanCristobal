//Implemente su propia función find

//devuelvo la primera palabra que contenga la cadena "script"

var arreglo = ['hola', 'javascript', 'typescript', 'js'];

function MyFind(array, condicion){  
    for(i=0; i<arreglo.length; i++){
        if(condicion(array[i])){
            return array[i];
            break; //porque devuelve solo el 1ero que coincida con la busqueda
        }
    }
}

var palabra2 = arreglo.find( (elemento) => {
    if(elemento.includes("script")){
        return elemento;
    }}
    )

var palabra1 = MyFind(arreglo, function(elemento){
    if(elemento.includes("script")){
        return elemento;
    }
})

console.log("arreglo original: ", arreglo)
console.log("funcion MyFind: ", palabra1)
console.log("funcion Find de js: ", palabra2)