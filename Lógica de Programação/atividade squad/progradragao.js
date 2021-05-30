const ler = require("prompt-sync")();


var nome = ler("Qual o nome do seu herói? ");

console.log("Bravo herói", nome, "o grande e poderoso dragão 'Programação' esta vindo para destruir o mundo, e só você pode nos salvar.");

var arma = ler("Escolha uma das seguinte armas: 'Sapato', 'Espada', ou 'Faca': ");

if (arma == "Espada" || "espada")
    console.log("Parabéns", nome, ", você ganhou derrotou o dragão!!!");
else console.log("Que pena, o dragão te fez de churrasquinho :c");



