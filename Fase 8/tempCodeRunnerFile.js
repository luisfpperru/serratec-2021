
const ler = require("prompt-sync")();

var agenda = Array(30);

//  ENTRADA
do{
    let dia = ler('Digite um dia de 1 a 30 (ou 0 para sair): ');
    while (dia > 30 || dia < 0) // checa uma possivel invalidade do dia
    {
        console.log('Dia inválido! Digite novamente...')
        dia = ler('Digite um dia de 1 a 30 (ou 0 para sair): ');
    }
    let detalhes = ler('Digite uma descrição do compromisso: ');
    agenda[dia] = detalhes;
}while(dia != 0) // o dia ser igual a 0 é o critério de parada


// SAIDA
for (let i = 1; i < 30; i++){
    if (agenda[i] != null && agenda[i] != undefined)
    console.log('Dia ',i,': ',agenda[i]); // Exibe o compromisso para cada um dos dias
}