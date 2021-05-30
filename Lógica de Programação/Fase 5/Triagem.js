/*

A finalidade do sistema "Triagem" é ajudar o hospital a identificar os
pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do
paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas,
receberá a avaliação na tela.

Paciente: Moisés
Já vacinado: ok
[Triagem]
Sujeito a infecção? false

*/

//Leitura
const ler = require("prompt-sync")();

let nome = ler("Paciente: ");
let vacinacao = ler("Já vacinado: ")
let infeccao = !(vacinacao == "sim" || vacinacao == "ok" || vacinacao == "Sim");
console.log("[Triagem]")
console.log("Sujeito a infecção? ",infeccao)

