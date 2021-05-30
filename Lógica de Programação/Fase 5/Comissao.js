/*


Os "vendedores comissionados" recebem 5% do valor de cada produto
vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um
adicional de 9% sobre o excedente. Seu programa irá receber o valor total
de vendas e emitir o recibo de comissão.

Vendas totais: 5230.66
Sua comissão: 261.53
Valor adicional: 20.76

*/


const ler = require("prompt-sync")();

// ENTRADA
let vendas = ler("Vendas totais: ");
vendas = Number(vendas);

//PROCESSAMENTO
let comissao = 0.05*vendas;
let extra = 0.0;
if (vendas >= 5000)
    extra = 0.09*(vendas - 5000);
console.log("Sua comissão: ",comissao);
console.log("Valor adicional: ", extra);
