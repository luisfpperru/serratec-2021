const ler = require("prompt-sync")();
var h = 0,
  m = 0;
while (m < 10 && f < 5) {
  var aluno = prompt("Aluno, digite M ou F: ");

  if (aluno == "F") f++;
  if (aluno == "M") m++;
}
console.log("Total de homens: ", m);
console.log("Total de mulheres: ", f);
