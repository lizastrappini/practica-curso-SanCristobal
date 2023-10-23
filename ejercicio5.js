//ejercicio 5

function zero(operation){
    if(operation){
        return operation(0);
    }
    return 0;
}

function one(operation){
    if(operation){
        return operation(1);
    }
    return 1;
}

function two(operation){
    if(operation){
        return operation(2);
    }
    return 2;
}

function three(operation){
    if(operation){
        return operation(3);
    }
    return 3;
}

function four(operation){
    if(operation){
        return operation(4);
    }
    return 4;
}

function five(operation){
    if(operation){
        return operation(5);
    }
    return 5;
}

function six(operation){
    if(operation){
        return operation(6);
    }
    return 6;
}

function seven(operation){
    if(operation){
        return operation(7);
    }
    return 7;
}

function eight(operation){
    if(operation){
        return operation(8);
    }
    return 8;
}

function nine(operation){
    if(operation){
        return operation(9);
    }
    return 9;
}

//nota: seven(times(five()) five():number1 es el operando derecho, seven():number2 es el operando izquierdo

function times(number1){ //multiplicaicon
    return function (number2){  
        return number2 * number1;
    };
}

function plus(number1){ //suma
    return function (number2){
        return number2 + number1;
    };
}

function minus(number1){ //resta
    return function (number2){
        return number2-number1;
    };
}

function dividedBy(number1){ //division
    return function (number2){       
        if(number1==0){
            return 'Error.Divided by 0'
        }
        return parseInt(number2/number1);

    };
}

console.log( seven(times(five())) );// debe devolver 35
console.log( four(plus(nine())) ); // debe devolver 13
console.log( eight(minus(three())) ); // debe devolver 5
console.log( six(dividedBy(two())) ); // debe devolver 3
