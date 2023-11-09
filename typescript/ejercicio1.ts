class Pila<T> {
    private elementos: T[];
  
    constructor() {
      this.elementos = [];
    }
  
    push(elemento: T): void {
      this.elementos.push(elemento);
    }
  
    pop(): T | undefined { //undefined por si no hay elementos en la pila y no hay nada que eliminar
      return this.elementos.pop();
    }
  
    size(): number {
      return this.elementos.length;
    }
  } 

class PilaSinRepetidos<T> {
  private elementos: T[] ;

  constructor() {
    this.elementos = [];
  }

  pop(): T | undefined { //undefined por si no hay elementos en la pila y no hay nada que eliminar
    return this.elementos.pop();
  }

  size(): number {
    return this.elementos.length;
  }
  
  push(elemento: T): void {
    if(!this.elementos.some(e => e === elemento)){
      this.elementos.push(elemento);
    }    
  }
//nota: el some devuelve true o false, si es true, no lo agrega, si es false, lo agrega
//incialmente lo quise hacer con el metodo includes tiraba error Property 'includes' does not exist on type 'T[]'
//entiendo que es porque no podia saber si elementos era un array y x lo tanto no sabia si tenia el metodo includes
  
}


//primera pila 
const pilaDeNumeros = new Pila<number>(); //solo voy a poder insertar numeros
pilaDeNumeros.push(1);
pilaDeNumeros.push(2);
pilaDeNumeros.push(3);
//pilaDeNumeros.push("hola"); no me deja porque no es un numero

pilaDeNumeros.pop(); 

console.log("Elementos de la pila de numeros:", pilaDeNumeros)
console.log("Tamaño de la pila de numeros:", pilaDeNumeros.size()); 


//segunda pila
const pilaDeString= new Pila<string>(); //solo voy a poder insertar strings
pilaDeString.push("hola1");
pilaDeString.push("hola2");
pilaDeString.push("hola3");
//pilaDeString.push(1); no me deja porque no es un string

pilaDeString.pop();

console.log("Elementos de la pila de strings:", pilaDeString)
console.log("Tamaño de la pila de strings:", pilaDeString.size()); 


//pila sin repetidos
const nuevaPila = new PilaSinRepetidos<number>(); 

nuevaPila.push(1);
nuevaPila.push(2);
nuevaPila.push(1);

console.log("Tamaño de la pila de sin repetidos:", nuevaPila.size());
console.log("Elementos de la pila sin repetidos:", nuevaPila)