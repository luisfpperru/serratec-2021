/*

O programa “Financeira” irá solicitar que o cliente digite seu nome,
empresa e função, além do valor do empréstimo que deseja contratar.
Então será calculado 86% do valor desejado como crédito disponível. A
resposta ao cliente deve seguir o exemplo abaixo.
Para escrever as mensagens, utilize variáveis com concatenação de strings.
O valor será escrito separadamente (no console.log).

Senhor Moisés, você está com sorte! Pela sua função de Programador, e sua
excelente relação com a empresa onde trabalha, foi aprovado um crédito em
sua conta corrente de R$ 200.00

*/

const ler = require("prompt-sync")();

console.log("============ PROGRAMA FINANCEIRA ===========");

let nome = ler("Qual o seu nome? ");
let empresa = ler("Qual a sua empresa? ");
let funcao = ler("Qual a sua funcao na empresa? ");
let valor = ler("E o valor do empréstimo? ");
let credito = 0.86*Number(valor);

console.log("Senhor",nome,", você está com sorte! Pela sua função de",funcao,"e sua excelente relação com a empresa onde trabalha, foi aprovado um crédito em sua conta corrente de R$",credito);
