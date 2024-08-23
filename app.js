let value = [];
let operation = 0;
let flag = 0;

while(flag == 0){
    operation = home();
    
    switch (operation){
        case "+":
            solicitarValores();
            value[2] = suma(value[0], value[1]);
            printResult(operation, value[0], value[1], value[2]);
            break;
        case "-":
            solicitarValores();
            value[2] = resta(value[0], value[1]);
            printResult(operation, value[0], value[1], value[2]);
            break;
        case "*":
            solicitarValores();
            value[2] = multiplicacion(value[0], value[1]);
            printResult(operation, value[0], value[1], value[2]);
            break;
        case "/":
            solicitarValores();
            value[2] = division(value[0], value[1]);
            printResult(operation, value[0], value[1], value[2]);
            break;
        case "salir":
            alert(`¡Hasta la próxima!`);
            flag = 1;
            break
        default:
            alert(`¡Operación Inválida! Elija una operación correcta`);
    }
}


function home(){
    return prompt("Ingrese tipo de operación. Escriba ' + ' para Suma, ' - ' para Resta, ' * ' para Multiplicación, ' / ' para División o ' salir '.");
}

function solicitarValores(){
    value[0] = +prompt("Ingrese el primer valor");
    value[1] = +prompt("Ingrese el segundo valor");
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

function printResult(operation, value1, value2, result){
    alert(`${value1} ${operation} ${value2} = ${result}`);
}