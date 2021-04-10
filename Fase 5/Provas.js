/*

Mesmo com aulas online, os alunos do cursinho continuam sendo
avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada.
Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10

*/

//Leitura
const ler = require("prompt-sync")();


console.log("=======SITUAÇÃO ESCOLAR=======");

//ENTRADA
let nota1 = ler("Qual a sua nota na P1? ");
nota1 = Number(nota1);
let nota2 = ler("Qual a sua nota na P2? ");
nota2 = Number(nota2);

//PROCESSAMENTO
let media = (nota1 + nota2)/2;
let situacao = "";
if (media >= 0 && media < 4)
    situacao = "Reprovado";
else if (media >= 4 && media < 6)
    situacao = "Recuperação";
else if (media >= 6 && media < 8)
    situacao = "Aprovado";
else
    situacao = "Destaque";

// SAIDA
console.log("A situação atual do aluno é: ", situacao);