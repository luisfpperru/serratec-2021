let aluno = [];
let chamada = [];

aluno[0] = "Alice";
chamada[0] = true;
aluno[1] = "Amanda";
chamada[1] = true;
aluno[2] = "André";
chamada[2] = true;
aluno[3] = "Bernardo";
chamada[3] = true;
aluno[4] = "Daniel";
chamada[4] = false;
aluno[5] = "Emerson";
chamada[5] = true;
aluno[6] = "Erik";
chamada[6] = true;
aluno[7] = "Everton";
chamada[7] = true;
aluno[8] = "Gabriel";
chamada[8] = true;
aluno[9] = "Gabriela";
chamada[9] = true;
aluno[10] = "Giovane";
chamada[10] = true;
aluno[11] = "Giulia";
chamada[11] = true;
aluno[12] = "Gustavo";
chamada[12] = true;
aluno[13] = "Israel";
chamada[13] = true;
aluno[14] = "Jenifer";
chamada[14] = true;
aluno[15] = "Jéssica";
chamada[15] = true;
aluno[16] = "João Vitor";
chamada[16] = true;
aluno[17] = "Karine";
chamada[17] = true;
aluno[18] = "Larissa";
chamada[18] = true;
aluno[19] = "Leonardo";
chamada[19] = false;
aluno[20] = "Luan";
chamada[20] = true;
aluno[21] = "Luana";
chamada[21] = true;
aluno[22] = "Luís";
chamada[22] = true;
aluno[23] = "Luiz";
chamada[23] = true;
aluno[24] = "Luiz Eduardo";
chamada[24] = true;
aluno[25] = "Maicon";
chamada[25] = true;
aluno[26] = "Marcelo";
chamada[26] = false;
aluno[27] = "Maria";
chamada[27] = false;
aluno[28] = "Mariana";
chamada[28] = true;
aluno[29] = "Matheus";
chamada[29] = true;
aluno[30] = "Natan";
chamada[30] = true;
aluno[31] = "Nicole";
chamada[31] = false;
aluno[32] = "Paulo";
chamada[32] = false;
aluno[33] = "Raphael";
chamada[33] = true;
aluno[34] = "Stephane";
chamada[34] = true;
aluno[35] = "Taiana";
chamada[35] = true;
aluno[36] = "Werikson";
chamada[36] = true;
/*
function presente(estou) {
  if (estou) return "Presente";
  return "Faltou";
}

const ler = require("prompt-sync")();
var quem = ler("Prof, qual aluno quer ver? ");

console.log(aluno[quem]);
console.log(presente(chamada[quem]));

for (let nro = 0; nro <= 36; nro++)
  console.log(aluno[nro] + " está no índice", nro, "e", presente(chamada[nro]));
*/

/* Com base nos vetores de alunos e presença, Exibir:
1) A quantidade de alunos;
2) O total de presentes;
3) O nome dos ausentes;
*/
const NUM_ALUNOS = 37; // quantidade de alunos

let contador_presentes = 0;
let ausentes = [];
let nro_maria = 0;

/*
 for (let nro = 0; nro < aluno.length; nro++) {
    if (aluno[nro] == "Maria"){
        nro_maria = nro;
        break
    } 
  }
*/

for (let nro = 0; nro < aluno.length; nro++) {
  if (chamada[nro]) contador_presentes++; // quantidade de presentes
  if (!chamada[nro]) ausentes.push(aluno[nro]); // adiciona o nome dos ausentes
  if (aluno[nro] == "Maria") nro_maria = nro;
}

var texto = ausentes[0];
for (let i = 1; i < ausentes.length; i++) texto += ", " + ausentes[i];

console.log("O número de alunos total é: ", NUM_ALUNOS);
console.log("O número da aluna Maria é: ", nro_maria);
console.log("O número de alunos presentes é: ", contador_presentes);
console.log("Os alunos ausentes são: ", texto);
