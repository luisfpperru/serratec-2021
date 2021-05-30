/*
A catraca do onibus quebrou e a empresa precisa dos dados da viagem. 

Os dados necessários para a empresa quando a pessoa entra no onibus são as seguintes: 
 1- Quantas pessoas ja entraram no onibus até o momento; 
 2- Se a pessoa é pagante ou entra com gratuidade;
 3- O total dos ganhos até o momento (Considerando a passagem a R$ 4,40).
*/

const prompt = require('prompt-sync')();

// let gratuidade = prompt('Entrar com gratuidade? ');
let pagantes = 0;
let total = 0;

let passageiros = Number(prompt('Quantos passageiros até o momento? '));
let gratuitos = Number(prompt('Quantos entraram com a gratuidade? '));

pagantes = passageiros - gratuitos;

if (pagantes > 0) total = pagantes * 4.4;

console.log('Ate o momento tivemos', passageiros, 'passageiros,', gratuitos, 'entraram com a gratuidade e', pagantes, 'foram pagantes.')
console.log('Arrecadado até o momento: R$' + total);