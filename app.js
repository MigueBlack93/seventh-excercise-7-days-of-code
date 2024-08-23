let value = [];
let operation = 0;


operation = prompt("Ingrese tipo de operación. Escriba suma, resta, multiplicación, división o salir");
if(operation == "salir"){
    alert(`¡Hasta la próxima!`);
}else{
    value[0] = prompt("Ingrese el primer valor");
    value[1] = prompt("Ingrese el segundo valor");
    switch (operation){
        case "suma":
            value[3] = suma(value[1], value[2]);
            printResult(operation, value[3]);
            break;
        case "resta":
            value[3] = resta(value[1], value[2]);
            printResult(operation, value[3]);
            break;
        case "multiplicación":
            value[3] = multiplicacion(value[1], value[2]);
            printResult(operation, value[3]);
            break;
        case "división":
            value[3] = division(value[1], value[2]);
            printResult(operation, value[3]);
            break;
        default:
            alert(`¡Hasta la próxima!`);
    }
}


function suma(value1, value2){
    return value1 + value2;
}

function resta(value1, value2){
    return value1 - value2;
}

function multiplicacion(value1, value2){
    return value1 * value2;
}

function division(value1, value2){
    return value1 / value2;
}

function printResult(operation, result){
    alert(`El resultado de la ${operation} es ${result}`);
}

