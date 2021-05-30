/*

Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo
sol, vai à praia. Do contrário, aproveita pra estudar. À tarde é ainda mais
regrado: para o almoço na praia, leva um lanche; em casa, feijoada. Após
almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus
hábitos em papel na sexta, após a previsão do tempo, e colar na porta da
geladeira.

*/

const ler = require("prompt-sync")();

// ENTRADA
let previsao = ler("Previsão do tempo hoje: ");

let local = "";
if (previsao == "Sol" || previsao == "sol" )
    local = "vou a praia";
else
    local = "vou estudar em casa";
if (local == "vou a praia")
    almoco = "levo um lanche";
else 
    almoco = "como uma feijoada"

// SAIDA
console.log("Hoje ",local," e ",almoco,". Depois, assisto televisão e tiro um cochilo.")
