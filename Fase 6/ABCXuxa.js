/*

O abecedário da Xuxa agora segue cantando a definição musical até que a
criança decida parar de ouvir, pressionando o zero.

*/

const ler = require("prompt-sync")();

console.log("============ ABECEDÁRIO DA XUXA ===========");

let continuar = 0;
do
{
    console.log(`
    A de amor
    B de baixinho
    C de coração
    D de docinho
    E de escola
    F de feijão
    G de gente
    H de humano
    I de igualdade
    J, juventude
    L, liberdade
    M, molecagem
    N, natureza
    O, obrigado
    P, proteção
    Q de quero-quero
    R de riacho
    S, saudade
    T de terra
    U de universo
    V de vitória
    X, o que que é?
    É Xuxa
    E Z é zum-zum-zum-zum-zum
    
    `)
    continuar = ler("Pressione 0 pra parar: ");
}while( continuar != 0)