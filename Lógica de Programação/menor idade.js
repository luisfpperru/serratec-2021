/*


Menor idade

*/
//LEITURA
const ler = require("prompt-sync")();

RESPOSTAS = 6;

var valor = ler("Qual a sua idade? ");
var menor = valor;

for (i = 0; i < RESPOSTAS; i++) {
  valor = Number(ler("Qual a sua idade? "));
  if (valor < menor) menor = valor;
}

console.log("A menor idade é:", menor);
