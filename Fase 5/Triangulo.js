/*


O programa “Triangular” lê as medidas do triângulo, e informa se ele é
equilátero, isósceles ou escaleno.

*/

const ler = require("prompt-sync")();

console.log("============ TRIANGULAR ===========")


// ENTRADA
let lado1 = ler("Digite a primeira medida: ");
let lado2 = ler("Digite a segunda medida: ");
let lado3 = ler("Digite a terceira medida: ");


// PROCESSAMENTO
if (lado1 == lado2)
    if (lado2 == lado3)
        tipo = "equilátero";
    else
        tipo = "isósceles";
else if (lado2 == lado3 || lado1 == lado3)
    tipo = "isósceles";
else
    tipo = "escaleno";

// SAIDA
console.log("O tipo do triângulo é: ",tipo)