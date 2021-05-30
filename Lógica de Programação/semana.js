/*
No programa "Semana" vamos escrever por extenso os nomes dos dias da semana.
*/

const ler = require("prompt-sync")();

var dia = [];

dia[0] = "Domingo";
dia[1] = "Segunda";
dia[2] = "Terça";
dia[3] = "Quarta";
dia[4] = "Quinta";
dia[5] = "Sexta";
dia[6] = "Sábado";

console.log("Que dia é hoje? ", dia[4]);

// JS clássica
var semana = new Array(7);

// JS morderna: uso do literal []
var semana = [];

//Constante
const semana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

console.log("Hoje é", semana[2]);
