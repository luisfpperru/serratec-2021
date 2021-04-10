/*

O setor de cobrança irá acertar os pagamentos com os "fornecedores" na
próxima sexta-feira. Para valores maiores que mil Reais, o pagamento será
em cheque. Os valores baixos serão pagos em dinheiro. Ao receber o valor
do pagamento, o sistema irá emitir um relatório.

*/

const ler = require("prompt-sync")();

// ENTRADA
let valor = ler("Valor de pagamento aos fornecedores: ");
valor = Number(valor);
let pagamento = "";

// PROCESSAMENTO
if (valor > 1000)
    pagamento = "em cheque";
else 
    pagamento = "em dinheiro";

// SAIDA
console.log("O valor do pagamento foi " + valor + " reais pagos " + pagamento);
