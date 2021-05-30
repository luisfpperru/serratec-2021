/* 

Vacina

Perguntar a idade, sendo 67 anos, pode vacinar hoje.
Sendo inferior, avisar que volta semana que vem.
sendo superior, pq não vacinou ainda?

*/

//Repetir sempre a leitura
const ler = require("prompt-sync")();

console.log("Programa de Vacinação");

var idade = ler("Próximo! Qual a sua idade?");

if (idade == 67)
    console.log("Pode vacinar hoje");
else if (idade < 67)
    console.log("Não pode vacinar hoje. Volte semana que vem");
else if (idade > 67)
    console.log("Por que não vacinou ainda?");
else
    console.error(idade);