/*
Indefinida: Repete pra sempre, enquanto a expressão é verdadeira

Promoção de Radio 93:
Os primeiros 5 ouvintes que ligarem ganham bonée camiseta da rádio.


*/

//LEITURA
const ler = require("prompt-sync")();

// sintaxe para (inicio, fim, incremento)
for (var i = 1; i <= 5; i++) {
  let nome = ler("Ouvinte: ");
  console.log("Parabéns", nome, "ganhou uma paçoca!");
}
console.log("Promoção encerrada!");
