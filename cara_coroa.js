/*
Jogo Cara ou Coroa
*/

//Repetir sempre a leitura
const ler = require('prompt-sync')();

console.log("Jogo cara ou coroa");
var moeda = ler('Digite "cara" ou "coroa": ');
var resultado;

//Aninhamento
if (moeda == "coroa") 
    resultado = "ganhou";
else {
    if (moeda == "cara") resultado ="VOCE PERDEU!";
    else resultado = "perdeu sim";
}

console.error(resultado);