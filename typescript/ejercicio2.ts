class figura{
    perimetro() : number{
        return 0;
    }

    area() : number {
        return 0;
    }
}

class cuadrado extends figura{

    constructor(private lado: number){
        super();
    }

    perimetro() : number{
        return this.lado * 4;
    }

    area() : number {
        return this.lado * this.lado;
    }

}

class circulo extends figura{

    constructor(private radio: number){
        super();
    }

    perimetro() : number{
        return this.radio * 2 * Math.PI;
    }

    area() : number {
        return this.radio * this.radio * Math.PI;
    }

}

const miCuadrado = new cuadrado(2);
console.log("Perimetro del cuadrado: ", miCuadrado.perimetro());
console.log("Area del cuadrado: ", miCuadrado.area());


const miCirculo = new circulo(2);
console.log("Perimetro del circulo: ", miCirculo.perimetro());
console.log("Area del circulo: ", miCirculo.area());