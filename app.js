let value = [];
let operation = 0;

function enterValue(){
    operation = prompt("Ingrese tipo de operación");
    value[0] = prompt("Ingrese el primer valor");
    value[1] = prompt("Ingrese el segundo valor");
}

switch (operation){
    case "suma":
        value[3] = value[1] + value[2];
        break;
    case "resta":
        value[3] = value[1] - value[2];
        break;
    case "multiplicación":
        value[3] = value[1] * value[2];
        break;
    case "división":
        value[3] = value[1] / value[2];
        break;
    default:
        alert(`¡Hasta la próxima!`);
}

function suma(value1, value2){
    return value1 + value2;
}

function printResult(operation, result){
    alert(`El resultado de la ${operation} es ${result}`);
}

