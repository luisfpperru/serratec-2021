/*

No programa “Poesia” um trecho de uma composição conhecida é
apresentado na tela. Após imprimir, o programa pergunta se o leitor quer
apreciar novamente os versos

*/

const ler = require("prompt-sync")();

console.log("============ POESIA ===========")


let continuar = "";
do
{
 console.log(`  
                Lithium, don't wanna lock me up inside
                Lithium, don't wanna forget how it feels without
                Lithium, I wanna stay in love with my sorrow
                Oh, but God I wanna let it go
                
                `);
    continuar = ler("Deseja apreciar novamente os versos? (S/N) ");


}while (continuar == "S" || continuar == "s"  || continuar == "Sim" || continuar == "sim" || continuar == "SIM")