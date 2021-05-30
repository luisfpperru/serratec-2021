/*

Os boletos da "Universidade" são emitidos com vencimento no dia 15 do
mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido
um desconto na próxima mensalidade. O programa irá receber o número
do boleto e o dia do pagamento, e emitir o extrato.

Dia hoje: 10
Número do Boleto: 1234
Dia de pagamento: 11
Desconto na próxima mensalidade? true

*/

//Leitura
const ler = require("prompt-sync")();

let dia_hoje = ler("Dia hoje: ");
let numero = ler("Número do Boleto: ")
let dia_pag = ler("Dia de pagamento: ")
let desconto = false;
if (dia_pag >=10 && dia_pag <= 13)
    desconto = true;
console.log("Desconto na próxima mensalidade? ",desconto)



