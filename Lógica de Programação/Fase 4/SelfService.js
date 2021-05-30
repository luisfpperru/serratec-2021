/*

O restaurante "Self-Service" precisa de um programa para imprimir as
etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá
digitar o preço do quilo e o total em gramas da refeição, considerando que
o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome do
restaurante, a tara do prato, o preço de 100 gramas, o peso consumido e o
valor total.

*/

const ler = require("prompt-sync")();

console.log("============ SELF-SERVICE =============");


//ENTRADA
let precoKg = ler("Preço do Quilo: ");
let peso_total = ler("Peso total da refeição (em gramas): ");
const TARA = 465;
let peso_consumido = peso_total - TARA;
let preco100g = 0.1*precoKg;
let valor_total = (0.001*precoKg)*peso_consumido;

// SAIDA
console.log("Restaurante Self Service");
console.log("O prato vazio pesa: ",TARA,'g');
console.log("Preço por 100 gramas: R$",preco100g.toFixed(2));
console.log("Peso consumido: ",peso_consumido,'g');
console.log("Valor total: R$",valor_total.toFixed(2));