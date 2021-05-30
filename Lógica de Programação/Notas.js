/*

Requisitos:
1. Leia uma sequência de notas;
2. Calcule e informe a média das notas;
3. Informe o número de alunos que passaram (notas acima de 6), 
número de alunos em recuperação, (nota entre 4 e 6) e número de alunos que reprovaram (notas abaixo de 6).

*/
const ler = require("prompt-sync")();

console.log("===ROTINA DA NOTAS DOS ALUNOS===");

//ENTRADA
const NUMERO_ALUNOS = 10;
var nota = 0.0;
var soma_notas = 0.0;
var media_notas = 0.0;
var nro_aprovados = 0;
var nro_recuperacao = 0;
var nro_reprovados = 0;

//PROCESSAMENTO
for (var i = 1; i < NUMERO_ALUNOS + 1; i++) {
  nota = Number(ler("Informe a nota do aluno: "));
  soma_notas += nota;
  if (nota >= 6) nro_aprovados++;
  else if (nota < 6 && nota >= 4) nro_recuperacao++;
  else nro_reprovados++;
}
media_notas = soma_notas / NUMERO_ALUNOS;

//SAIDA
console.log("A média das notas é:", media_notas);
console.log("O número de aprovados é:", nro_aprovados);
console.log("O número de alunos em recuperação é:", nro_recuperacao);
console.log("O número de reprovados é:", nro_reprovados);
