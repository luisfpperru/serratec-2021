/*

O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido

*/

const ler = require("prompt-sync")();

//ENTRADA

let angulo1 = ler("Primeiro ângulo: ");
angulo1 = Number(angulo1);
let angulo2 = ler("Segundo ângulo: ");
angulo2 = Number(angulo2);
let angulo3 = ler("Terceiro ângulo: ");
angulo3 = Number(angulo3);
let soma = angulo1 + angulo2 + angulo3;
let validade;

// PROCESSAMENTO
if (soma == 180 )
    validade = "triângulo válido";
else
    validade = "triângulo inválido";

//SAIDA
console.log("Situação: ",validade);