var Pila = /** @class */ (function () {
    function Pila() {
        this.elementos = [];
    }
    Pila.prototype.push = function (elemento) {
        this.elementos.push(elemento);
    };
    Pila.prototype.pop = function () {
        return this.elementos.pop();
    };
    Pila.prototype.size = function () {
        return this.elementos.length;
    };
    return Pila;
}());
var PilaSinRepetidos = /** @class */ (function () {
    function PilaSinRepetidos() {
        this.elementos = [];
    }
    PilaSinRepetidos.prototype.pop = function () {
        return this.elementos.pop();
    };
    PilaSinRepetidos.prototype.size = function () {
        return this.elementos.length;
    };
    PilaSinRepetidos.prototype.push = function (elemento) {
        if (!this.elementos.some(function (e) { return e === elemento; })) {
            this.elementos.push(elemento);
        }
    };
    return PilaSinRepetidos;
}());
//primera pila 
var pilaDeNumeros = new Pila(); //solo voy a poder insertar numeros
pilaDeNumeros.push(1);
pilaDeNumeros.push(2);
pilaDeNumeros.push(3);
//pilaDeNumeros.push("hola"); no me deja porque no es un numero
pilaDeNumeros.pop();
console.log("Elementos de la pila de numeros:", pilaDeNumeros);
console.log("Tamaño de la pila de numeros:", pilaDeNumeros.size());
//segunda pila
var pilaDeString = new Pila(); //solo voy a poder insertar strings
pilaDeString.push("hola1");
pilaDeString.push("hola2");
pilaDeString.push("hola3");
//pilaDeString.push(1); no me deja porque no es un string
pilaDeString.pop();
console.log("Elementos de la pila de strings:", pilaDeString);
console.log("Tamaño de la pila de strings:", pilaDeString.size());
//pila sin repetidos
var nuevaPila = new PilaSinRepetidos();
nuevaPila.push(1);
nuevaPila.push(2);
nuevaPila.push(1);
console.log("Tamaño de la pila de sin repetidos:", nuevaPila.size());
console.log("Elementos de la pila sin repetidos:", nuevaPila);
