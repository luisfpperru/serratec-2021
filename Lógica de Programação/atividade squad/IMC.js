//Faça um programa que peça o peso e a altura de uma pessoa e calcula o IMC(índice de massa corporal) dela e diz se está em seu peso ideal, abaixo ou acima, e da dicas de como ir para o seu peso ideal.

  const prompt = require('prompt-sync')();

  //entrada
  const altura = Number(prompt('Digite sua altura (em metros ex.: 1.60): '));
  const massa = Number(prompt('Digite seu peso: '));
  

  //processamento 
  const IMC = massa / (altura * altura);

  const magreza = IMC < 18.5;
  const normal = 18.5 < IMC && IMC < 24.9; 
  const sobrepeso = 24.9 < IMC && IMC < 30;
  const obesidade = IMC > 30;

  //saida
  if (magreza) {
    console.log('Seu IMC é ' +IMC+ ' e voçê está abaixo do peso!\nVocê deve começar a praticar atividade física, aumentar o volume das refeições e comer a cada 3 horas.')
  }else if (normal) {
    console.log('Seu IMC é ' +IMC+ 'e você está dentro do peso adequado!\nContinue tendo cuidado com a alimentação e pratique atividade física regularmente para manter o peso e prevenir doenças.');
  }else if (sobrepeso) {
    console.log('Seu IMC é ' +IMC+ ' por isso você está acima do peso.\nPara emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana.');
  }else if (obesidade) {
    console.log('Seu IMC é ' +IMC+ ' por isso você está acima do peso.\nPara emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana.');
  }

