/*
Exercício : Teatro_do_Monstro
// O teatro do monstro permite a entrada de até 5 pessoas;
// A peça só começa após atingir a lotação máxima;
// Nesta peça é proibida a entrada de menores de 16 anos;
// O gerente quer saber quantos são homens e quantos são mulheres antes da peça começar.
*/

const prompt = require('prompt-sync')();

let dentro = 0;
let entrar = '';
let maior = '';
let masculino = 0;
let feminino = 0;
let genero = '';

do {
    maior = prompt('Maior de idade: ')
    if (maior = 'sim'){
        entrar = prompt('Entrar no teatro? ');
        console.log('Com qual genero você se identifica? ');
        genero = prompt('Digite M para Masculino ou F para Feminino: ');
        if (genero == 'M') masculino++;
        else if (genero == 'F') feminino++;
    }
    if (entrar == 'sim') {
        dentro ++
    }
    
}while (dentro < 5)

console.log('Teatro lotado.\nHomens:', masculino, 'Feminino:',feminino);