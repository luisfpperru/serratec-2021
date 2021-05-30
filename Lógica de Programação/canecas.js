const ler = require("prompt-sync")();

const RESPOSTA = "";
var acerto = "";

for (i = 0; i < 3; i++) {
  chance = 2;
  do {
    var resposta = ler("O que é mais importante, a expressão ou o resultado?");
    let acerto = resposta == RESPOSTA;
    if (acerto) console.log("Parabéns! Ganhou a caneca com o seu nome.");
    chance--;
  } while (chance > 0 && !acerto);
  if (acerto) console.log("Parabéns! Ganhou a caneca com seu nome.");
  else console.log("Que pena...fica pra próxima...");
}
