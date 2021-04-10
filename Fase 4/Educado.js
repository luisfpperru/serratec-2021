/*

O programa "Educado" irá perguntar o seu nome, e também como você
gostaria de ser chamado. Depois disso, uma saudação para você aparece
na tela.

*/

const ler = require("prompt-sync")();

console.log("============ PROGRAMA EDUCADO ===========");

let nome = ler("Como é seu nome? ");
let apelido = ler("Como gostaria de ser chamado? ");
console.log("Seja bem-vindo, ",apelido,". É um prazer conhecé-lo =)")