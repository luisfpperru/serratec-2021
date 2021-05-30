/*

A “SuperCalc” é a calculadora que, além dos números, lê o operador que
será aplicado, e depois realiza a operação. Considere as entradas na ordem:
primeiro número, sinal (+, -, * ou /) e segundo número.

*/

const ler = require("prompt-sync")();

console.log("============SUPER CALC ===========")


// ENTRADA
let nro1 = ler("Digite o primeiro número: ");
nro1 = Number(nro1);
let sinal = ler("Digite a operação desejada: ");
let nro2 = ler("Digite o segundo número: ");
nro2 = Number(nro2);
var resultado;

//PROCESSAMENTO
if (sinal == "+")
    resultado = nro1 + nro2;
else if (sinal == "-")
    resultado = nro1 - nro2;
else if (sinal == "*")
    resultado = nro1*nro2;
else if (sinal == "/" && nro2 != 0)
    resultado = nro1/nro2;
else
    resultado = "inválido";

//SAIDA
console.log("O resultado de ", nro1 + " "+ sinal + " " + nro2 +" = "+ resultado);