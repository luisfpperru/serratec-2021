// caso base = redução principal

const FRASE = "Eu não posso, pera, falar não duas vezes num a frase.";

function otimista(frase) {
  let nova = frase.replace("não", "sim");

  // se eu sei que preciso chamar a função novamente

  // caso base
  // existe ao menos uma vez o não na frase
  var pos = nova.indexOf("não");

  if (pos >= 0) nova = otimista(nova);

  return nova;
}

let otimismo = otimista(FRASE);

console.log("Capo meio vazio ", FRASE);
console.log("Capo meio cheio ", otimismo);
