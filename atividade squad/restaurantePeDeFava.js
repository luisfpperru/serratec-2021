/*
1)  Crie uma função que será o cardápio de um restaurante online, no cardápio constara a refeição e o o preço da  mesma.  As refeições do restaurante "pé de fava" é atualizada dia a dia, então crie uma função (function) modulável que pode ser colocado o preço e a comida.
*/
const prompt = require('prompt-sync')();
let opcoesDia = [];
let precosDia = [];

function cardapio() {
    

    let quantidade = prompt('Quantas opções de pratos teremos hoje: ');
    quantidade = Number(quantidade);

    console.log('Cardapio do dia:')
    
    for (let i = 1; i <= quantidade; i++){
        let opcao = prompt('Digite a opção N°' + i);
        let preco = prompt('Digite o preço da opção N°' + i + ' :R$');
        opcoesDia.push(opcao);
        precosDia.push(preco);
    }
}

cardapio()

console.log('------CARDAPIO DO DIA ------')


for (let i = 0; i < opcoesDia.length; i++) {
    let item = opcoesDia[i];
    let prec = precosDia[i]
    console.log('Item:', i + 1, item, 'R$' + prec);
}

