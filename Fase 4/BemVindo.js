/*

O programa “bem-vindo” pergunta seu nome e sobrenome, e depois
gentilmente te cumprimenta.

Qual o seu nome? Moisés
E sobrenome? Baddini
Olá Moisés Baddini, seja bem vindo ao universo da programação!


*/


const ler = require("prompt-sync")();

console.log("============ PROGRAMA BEM-VINDO ===========");

let nome = ler("Qual o seu nome? ");
let sobrenome = ler("E seu sobrenome? ");

console.log("Olá "+ nome +" "+ sobrenome + ", seja bem vindo ao universo da programação!");