let value = [];
let operation = 0;

function enterValue(){
    operation = prompt("Ingrese tipo de operación");
    value[0] = prompt("Ingrese el primer valor");
    value[1] = prompt("Ingrese el segundo valor");
}

function printResult(operation, result){
    alert(`El resultado de la ${operation} es ${result}`);
}

