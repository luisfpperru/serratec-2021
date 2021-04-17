/*
Faça um programa de control de gastos:
requisitos:
1 peça a renda mensal do usuário.
2 peça os gastos mensais do usuário.
3 calcule os gastos e diga se ele gasta mais do que recebe.
4 caso gaste mais que ganha de dicas de como economizar.
*/
const prompt = require("prompt-sync")();

console.log("Controle de gastos");

// ENTRADA
const mensal = Number(prompt("Quanto você ganha por mês? R$"));
const contas = Number(
  prompt("Quanto você gasta com contas fixas (luz, água, aluguel, etc) por mês? R$")
);
const comida = Number(prompt("Quanto você gasta com alimentação por mês? R$"));
const lazer = Number(prompt("Quanto você gasta em lazer por mês? R$"));
const variados = Number(
  prompt(
    "Quanto você tem de gastos variados(gasolina, vestimentas) por mês? R$"
  )
);

// PROCESSAMENTO
let total = contas + comida + lazer + variados; // somatório dos gastos
let maior = variados;
if (comida > maior) {
  maior = comida;
} else if (lazer > maior) {
  maior = lazer;
} // define qual o maior gasto dentre as opções


// SAIDA
if (total > mensal) {
  // compara o total gasto e o total arrecadado no mês
  console.log("Você está gastando mais que recebe.");
  if (contas > maior) {
    console.log(
      "Você está gastando muito com as contas fixas, tente economizar mais com isso."
    );
  } else if (comida == maior) {
    console.log(
      "Você está gastando muito com alimentação, tente economizar mais com isso."
    );
  } else if (lazer == maior) {
    console.log(
      "Você está gastando muito com lazer, tente economizar mais com isso"
    );
  } else if (variados == maior) {
    console.log(
      "Seus gastos variados estão muito altos, tente economizar mais."
    );
  }
} else {
  let sobra = mensal - total;
  console.log(
    "Parabéns! Você controla bem seus gastos, e guarda " + sobra + " por mês."
  );
}
