/*

Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). 
Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.
== Banco de Sangue ==
[Digite “Sim” ou “Não” nas restrições a seguir]
Idade abaixo de 16 ou acima de 69 anos: Não
Pesa menos de 50kg: Não
Portador de Hepatite: Não
Já teve Malária: Não
Fez doação recente: Sim

[Resultado da triagem]
Pode doar sangue? False


*/

console.log("== Banco de Sangue ==");
console.log("[Digite “Sim” ou “Nao” nas restrições a seguir]");

const ler = require("prompt-sync")();

//ENTRADA
let idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");
let peso = ler("Peso menos de 50Kg: ");
let hepatite = ler("Portador de Hepatite: ");
let malaria = ler("Já teve Malária: ")
let doacao = ler("Fez doação recente: ")

//PROCESSAMENTO
let resultado = ( (idade = "Nao") && (peso == "Nao") && (hepatite == "Nao") && (malaria == "Nao") && (doacao == "Nao") )

//SAIDA
console.log("[Resultado da triagem]");
console.log("Pode doar sangue? ",resultado);