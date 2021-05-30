/*


O programa “Compromissos” gerencia a sua agenda do mês. Cada dia só comporta um compromisso. 
Você pode digitar um compromisso, informando o dia e a descrição, e consultar se existe algum apontamento para determinado dia.
Dicas: Escolha o mês que desejar, ou considere 30 dias. 
Você pode definir como critério de saída do programa a digitação do dia zero. Em JS, um array não inicializado possui undefined em todas as posições.


*/


const ler = require("prompt-sync")();

var agenda = new Array(30); // cria vetor
var dia;

//  ENTRADA
do{
    dia = ler('Digite um dia de 1 a 30 (ou 0 para sair): ');
    while (dia > 30 || dia < 0) // checa uma possivel invalidade do dia
    {
        console.log('Dia inválido! Digite novamente...')
        dia = ler('Digite um dia de 1 a 30 (ou 0 para sair): ');
    }
    if (dia != 0) // checa se o usuário n quer sair antes
        agenda[dia] = ler('Digite uma descrição do compromisso: ');
    
}while(dia != 0) // o dia ser igual a 0 é o critério de parada


// SAIDA
console.log('---AGENDA DO MÊS-----'); // Exibe o compromisso para cada um dos dias
for (let i = 1; i <= 30; i++){
    if (agenda[i] != null && agenda[i] != undefined)
    console.log('Dia ',i,': ',agenda[i]); // Exibe o compromisso para cada um dos dias
}