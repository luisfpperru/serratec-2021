// primeira funcao
const ler = require("prompt-sync")();

function guiche(valor) {
  console.log("Boleto ", valor, ": Pagamento recebido.");
}

guiche(3433);
guiche(0957);

function par(numero) {
  var retorno = numero % 2 == 0;
  return retorno;
}

var numero = 5;
var r = par(numero);
console.log("o número ", numero, "é", r);

var numero = 8;
var r = par(numero);
console.log("o número ", numero, "é", r);
