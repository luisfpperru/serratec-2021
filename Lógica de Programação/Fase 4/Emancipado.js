/*
É considerado “Emancipado” qualquer pessoa a partir de 21 anos, ou o
indivíduo do sexo masculino a partir dos 18 anos. Crie um programa para
atestar a emancipação do cidadão segundo o ano do seu nascimento.
Sexo: Feminino
Ano de nascimento: 1999
Cidadão emancipado? True

*/

const ler = require("prompt-sync")();

//ENTRADA
const ANO = 2021; // ano atual
let genero = ler("Sexo: ");
let ano = ler("Ano de nascimento: ");
ano = Number(ano);


//PROCESSAMENTO
if (genero == "Masculino"){
    if ((ANO - ano) >= 18)
        emancipado = true;
    else
        emancipado = false;
}else{
    if ((ANO - ano) >= 21)
        emancipado = true;
    else
        emancipado = false;
}
    

//SAIDA
console.log("Cidadão emancipado? ", emancipado);

