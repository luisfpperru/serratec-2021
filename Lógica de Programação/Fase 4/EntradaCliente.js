/*

O aplicativo na entrada da loja possui internamente um limite de pessoas
que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez
que um cliente quiser entrar, o segurança irá preencher a quantidade de
pessoas já na loja, e o programa avisará se o cliente pode prosseguir.


*/

const ler = require("prompt-sync")();

console.log("============ APLICATIVO DE ENTRADA =============");

//ENTRADA
const LIMITE = 30;
let nro_pessoas = ler("Número de pessoas na loja: ");

//PROCESSAMENTO
if (nro_pessoas >= LIMITE)
    mensagem = "Loja lotada! Não pode avançar."
else
    mensagem = "Bem-vindo! O cliente pode prosseguir."

//SAIDA
console.log(mensagem);
