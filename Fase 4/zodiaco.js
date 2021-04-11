/*

O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!

Aquário: 20 de janeiro a 19 de fevereiro

*/

const ler = require("prompt-sync")();

//ENTRADA
let mes = ler("Mês do seu nascimento: ");
mes = Number(mes);
let dia = ler("Dia do nascimento: ");
dia = Number(dia);

// PROCESSAMENTO
let inteligente = (mes == 1 && dia >= 20) || (mes == 2 && dia <= 19);

//SAIDA
console.log("Você é inteligente? ",inteligente);