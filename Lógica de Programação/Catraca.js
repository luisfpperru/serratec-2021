/*
Fila Balada
*/

//Repetir sempre a leitura
const ler = require("prompt-sync")();

console.log("Fila Balada");
var pessoa = ler("Segurança, quem é o próximo da fila?");

console.log("Entrada liberada!");

var gratis =
  pessoa == "mulher" ||
  pessoa == "Mulher" ||
  pessoa == "feminino" ||
  pessoa == "f";

// verdade
if (gratis) console.log("Entrada gratuita");
//falso
else {
  console.log("Paga R$ 30");
  gratis == false;
}
