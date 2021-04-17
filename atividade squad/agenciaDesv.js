/*
--AGÊNCIA DEV--
Na nossa incrível agência de viagens faremos um pacotão a sua escolha:
1 - Precisa ter 3 opções de lugares no mínimo (fica a criatividade do squad);
2- Fazer um pacote de viagem para cada lugar incluindo adicionais (por exemplo: Viagem para Santa Catarina; passeio no: Beto Carrero; 2 dias de parque,e 1 em pontos turísticos; hotel que vai ficar; quantidade de pessoas; formas de pagamento; valor total da viagem);
(obs: é só um exemplo faça a parir da sua imaginação!!)
3 - UMA IDEIA CASO O SQUAD QUEIRA -- No final mostre o valor total e pergunte se essa é a escolha do cliente se sim pacote compradíssimo, se não retorne a escolhe de local e pacote.
*/

const prompt = require("prompt-sync")();

let pacote1 = 'Rio De Janeiro - Rio De Janeiro';
let pacote2 = 'Santa Catarina - Balneário Camboriú';
let pacote3 = 'Salvador - Bahia';

console.log('Escolha um pacote:\n1 - ' + pacote1 + '\n2 - ' + pacote2 + '\n3 - ' + pacote3)
const op = prompt('1, 2 ou 3: ');

if (op == '1') {
    console.log('Pacote 1 para 5 pessoas:\nExcursão Cristo Redentor, Escadaria Selarón e Pão de Açúcar\nHotel: Grand Hyatt Rio de Janeiro');
    console.log('Valor total da viagem: R$1500,95\nFormas de pagamento: A vista.')
}else if (op == '2') {
    console.log('Pacote 2 para 5 pessoas:\nTraslado de Ida e Volta ao Beto Carrero, Tour Serra do Rio do Rastro e Urubici\nHotel: Hotel dos Açores')
    console.log('Valor total da viagem: R$1000,03\nFormas de pagamento: A vista ou 11 vezes no cartão.')
}else if(op == '3') {
    console.log('Pacote 3 para 3 pessoas:\nExcursão a um Quilombo com Almoço, 1 Dia nas Praias de Mangue Seco, Dunas e Buggy\nHotel: Hotel Deville Prime Salvador.')
    console.log('Valor total da viagem: R$333,22\nFormas de pagamento: A vista ou 2 vezes no cartão.');
}else console.log('Pacote invalido.')