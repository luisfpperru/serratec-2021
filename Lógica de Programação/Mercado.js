/* 

Contador de pessoas no mercado

*/

//LEITURA
const ler = require("prompt-sync")();
// CONSTANTE
const LIMITE = 3;
var client;
var total = 0;

/*
cliente = ler("Final do CPF?");
total++;
while (total < LIMITE){
    cliente = ler("Final do CPF?");
     total++;        
    console.log("Números de clientes na loja: ", total);
}
*/

do {
  cliente = ler("Final do CPF?");
  total++;
  console.log("Números de clientes na loja: ", total);
} while (total < LIMITE);

console.log("LOTADO!");
