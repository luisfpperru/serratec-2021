/*

O programa “Relacionais” lê os inteiros A e B. 
Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.

*/

const ler = require("prompt-sync")();

//ENTRADA
let a = ler("Inteiro A: ");
a = Number(a);
let b = ler("Inteiro B: ");
b = Number(b);

// PROCESSAMENTO
let r1 = a == b;
let r2 = a > b;
let r3 = a < b;

// SAIDA
console.log(a, " = ", b, " = ", r1);
console.log(a, " > ", b, " = ", r2);
console.log(a, " < ", b, " = ", r3);
