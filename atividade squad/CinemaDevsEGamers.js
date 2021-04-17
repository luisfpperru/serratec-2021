/*
1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia entrada, para a reserva, basta informar o nome e se é meia ou não, é permitido apenas uma reserva por nome.
2. Após os 5 reservados,  o sistema informa: o número do ingresso, o nome de quem reservou e se é meia ou não.
*/
const prompt = require('prompt-sync')();

let meia = 0;
let inteira = 0;

var pagou1;
let nome1 = 'a';
var pagou2;
let nome2 = 'b';
var pagou3;
let nome3 = 'c';
var pagou4;
let nome4 = 'd';
var pagou5;
let nome5 = 'e';

let teste1;
do {
nome1 = prompt('Digite seu nome: ')
teste1 = (nome1 != nome2) && (nome1 != nome3) && (nome1 != nome4) && (nome1 != nome5) && !(meia + inteira == 5);
if(teste1){
    if (meia < 2) {    
        pagar = prompt('Pagar meia entrada:');
        if (pagar == 'sim'){
            var pagou1 = 'meia'
            meia++;

        }else if (inteira < 3 || pagar != 'sim') {
            pagar = prompt('Comprar ingresso: ')
            if (pagar == 'sim') {
                inteira++
                var pagou1 = 'inteita'
            }else {
                console.log('Só temos ingresso de meia etntrada.')
                pagar = prompt('Pagar meia entrada:');
                if (pagar == 'sim'){
                    var pagou5 = 'meia'
                    meia++;
                }
            }
        }
    }
}
}while(!teste1)

let teste2;
do{
nome2 = prompt('Digite seu nome: ')
teste2 = (nome2 != nome1) && (nome2 != nome3) && (nome2 != nome4) && (nome2 != nome5) && !(meia + inteira == 5);;
if(teste2){
    if (meia < 2) {    
        pagar = prompt('Pagar meia entrada:');
        if (pagar == 'sim'){
            var pagou2 = 'meia'
            meia++;

        }else if (inteira < 3 && pagar != 'sim') {
            pagar = prompt('Comprar ingresso: ')
            if (pagar == 'sim') {
                inteira++
                var pagou2 = 'inteita'
            }else {
                console.log('Só temos ingresso de meia etntrada.')
                pagar = prompt('Pagar meia entrada:');
                if (pagar == 'sim'){
                    var pagou5 = 'meia'
                    meia++;
                }
            }
        }
    }
}
}while(!teste2)

let teste3;
do{
nome3 = prompt('Digite seu nome: ')
teste3 = (nome3 != nome1) && (nome3 != nome2) && (nome3 != nome4) && (nome3 != nome5) && !(meia + inteira == 5);;
if(teste3){
    if (meia < 2) {    
        pagar = prompt('Pagar meia entrada:');
        if (pagar == 'sim'){
            var pagou3 = 'meia'
            meia++;

        }else if (inteira < 3 && pagar != 'sim') {
            pagar = prompt('Comprar ingresso: ')
            if (pagar == 'sim') {
                inteira++
                var pagou3 = 'inteita'
            }else {
                console.log('Só temos ingresso de meia etntrada.')
                pagar = prompt('Pagar meia entrada:');
                if (pagar == 'sim'){
                    var pagou5 = 'meia'
                    meia++;
                }
            }
        }
    }
}
}while(!teste3)

let teste4;
do{
nome4 = prompt('Digite seu nome: ')
teste4 = (nome4 != nome1) && (nome4 != nome2) && (nome4 != nome3) && (nome4 != nome5) && !(meia + inteira == 5);;
if(teste4){
    if (meia < 2) {    
        pagar = prompt('Pagar meia entrada:');
        if (pagar == 'sim'){
            var pagou4 = 'meia'
            meia++;

        }else if (inteira < 3 && pagar != 'sim') {
            pagar = prompt('Comprar ingresso: ')
            if (pagar == 'sim') {
                inteira++
                var pagou4 = 'inteita'
            }else {
                console.log('Só temos ingresso de meia etntrada.')
                pagar = prompt('Pagar meia entrada:');
                if (pagar == 'sim'){
                    var pagou5 = 'meia'
                    meia++;
                }
            }
        }
    }
}
}while(!teste4)

let teste5;
do{
nome5 = prompt('Digite seu nome: ')
teste5 = (nome5 != nome1) && (nome5 != nome2) && (nome5 != nome3) && (nome5 != nome4) && !(meia + inteira == 5);;
if(teste5){
    if (meia < 2) {    
        pagar = prompt('Pagar meia entrada:');
        if (pagar == 'sim'){
            var pagou5 = 'meia'
            meia++;

        }else if (inteira < 3 && pagar != 'sim') {
            pagar = prompt('Comprar ingresso: ')
            if (pagar == 'sim') {
                inteira++
                var pagou5 = 'inteita'
            }else {
                console.log('Só temos ingresso de meia etntrada.')
                pagar = prompt('Pagar meia entrada:');
                if (pagar == 'sim'){
                    var pagou5 = 'meia'
                    meia++;
                }
            }
        }
    }
}
}while(!teste5)

console.log('O ingresso N° 1 do', nome1, pagou1);
console.log('O ingresso N° 2 do', nome2, pagou2);
console.log('O ingresso N° 3 do', nome3, pagou3);
console.log('O ingresso N° 4 do', nome4, pagou4);
console.log('O ingresso N° 5 do', nome5, pagou5);
