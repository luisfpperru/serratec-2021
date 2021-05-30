/*
O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos.
Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de
direcionamento:
    -Acima de 67 anos = Por quê não vacinou ainda?
    -Abaixo de 67 anos = Volte na próxima semana
    -67 anos completos = Vacinação hoje
*/

//Leitura
const ler = require("prompt-sync")();

console.log("=======VACINAÇÃO CONTRA COVID=======");


// ENTRADA
let idade = ler("Qual a sua idade? ")
let mensagem = ""; 

// PROCESSA
if (idade > 67)
    mensagem = "Porque não vacinou ainda??";
else if (idade < 67) 
    mensagem = "Volte na próxima semana...";
else
    mensagem = "Pode vir! Vacinação hoje.";

// SAIDA
    console.log(mensagem);
