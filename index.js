
let entrada = "";
let operador = "";
let numeroAnterior = "";

function adicionarNumero(numero) {
    entrada += numero;
    document.getElementById("visualizador").value = entrada;
}

function adicionarOperacao(op) {
    operador = op;
    numeroAnterior = entrada;
    entrada = "";  
}

function calcular() {
    let resultado;
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(entrada);

    if (operador === "+") resultado = num1 + num2;
    else if (operador === "-") resultado = num1 - num2;
    else if (operador === "*") resultado = num1 * num2;
    else if (operador === "/") resultado = num1 / num2;

    entrada = resultado.toString();
    document.getElementById("visualizador").value = entrada;
}

function limpar() {
    entrada = "";
    operador = "";
    numeroAnterior = "";
    document.getElementById("visualizador").value = "";
}

