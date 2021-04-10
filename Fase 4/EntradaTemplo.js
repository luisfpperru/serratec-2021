/*

Em tempos de pandemia, só é permitido entrar em templos religiosos
pessoas de máscara. Na portaria deve ser medida a temperatura à
distância, e o valor não deve ultrapassar 37,5º.

Usa máscara: Não
Temperatura: 36.9
Autorizar a entrada? False

*/

const ler = require("prompt-sync")();

//ENTRADA
let mascara = ler("Usa máscara: ");
let temperatura = ler("Temperatura: ");
temperatura = Number(temperatura);

//PROCESSAMENTO
let entrada = ( (mascara == "Sim" || mascara == "sim") && temperatura < 37.5);

//SAIDA
console.log("Autorizar a entrada: ", entrada);

