/*

Jéssica tem uma sapateira no fim do corredor. Nela cabem 5 sapatos, e cada espaço é numerado. 
Ela quer criar um aplicativo para guardar o número do espaço e o sapato depositado nele. 
Depois, ao digitar o número da gaveta, o programa irá imprimir o nome do calçado armazenado.

*/
const ler = require("prompt-sync")();

//const CAPACIDADE = 6;
//var sapato = new Array(CAPACIDADE); // Array estático
var sapato = []; // Array dinâmico

sapato[1] = "Sapatilha";
sapato[2] = "Salto Alto";
sapato[3] = "Bota marrom";
sapato[4] = "Sandália de Dedo";
sapato[5] = "Sapatênis";
sapato[6] = "Kichute";

//Entrada
let gaveta = ler("Qual gaveta você quer?");
gaveta = Number(gaveta);

//Processamento
let encontrado = sapato[gaveta];

/*
if (gaveta == 1) encontrado = sapato[1];
else if (gaveta == 2) encontrado = sapato[2];
else if (gaveta == 3) encontrado = sapato[3];
else if (gaveta == 4) encontrado = sapato[4];
else if (gaveta == 5) encontrado = sapato[5];
else if (gaveta == 6) encontrado = sapato[6];
*/

console.log("Na gaveta " + gaveta + " temos um " + encontrado);

console.log("Guardar um sapato: ");
let gaveta = ler("Qual gaveta você quer?");
gaveta = Number(gaveta);

var troca = "N";

if (sapato[gaveta] != "") {
  let nome = ler("Nome?");
  sapato[gaveta] = nome;
}
