/*
--Leilaflix--
Este é um canal de stream de filmes de Horror e Drama.
Apresente uma lista final de filmes e atrelar a relevância dela de acordo com as escolhas do usuário durante a interação com a lista de filmes exibidos no canal (exemplo da Netflix, Spotify, Youtube)
Dica: categorize a relevância dos filmes, afunilando a preferência do usuário a partir da seleção dos filmes que contém tópicos do interesse do usuário.
(Ex: "Titanic (95%): este filme venceu diversos prêmios Oscar".)
*/

const prompt = require('prompt-sync')();

function prefe() {
    console.log('Qual das opçôes que mais se assemelham ao seu gosto musical:');
    let prefe1 = prompt('1 - Musicas mais "caoticas" (heavy metal, etc...) ou 2 - Musicas mais calmas (musica classica, etc...): ');
    console.log('Qual das opçôes que mais se assemelham ao que você consome no YouTube:');
    let prefe2 = prompt('1 - Vídeos mais caoticos (Demolições, etc..) ou 2 - Vídeos calmos (Barulho de chuva, etc...): ');
    console.log('Qual das opçôes que mais se assemelham ao que você consome a Netflix:');
    let prefe3 = prompt('1 - Filmes de Horror ou 2 - Filmes Drama: ');

    horror = prefe1 == '1' && prefe2 == '1' && prefe3 == '1';
    drama = prefe1 == '2' && prefe2 == '2' && prefe3 == '2';

    return horror, drama;
}
prefe();

if (drama) {
    console.log('Dicas de filmes com base em suas preferencias:')
    console.log("Titanic\nSobre o Tinanic: este filme venceu diversos prêmios Oscar");
    console.log("Me Before You\nSobre o Me Before You: Me Before You foi lançado dia 16 de junho de 2016 nos cinemas brasileiros.");

} else if(horror) {
    console.log('Dicas de filmes com base em suas preferencias:')
    console,log('Friday the 13th\nSobre o Friday the 13th: O longa-metragem foi um grande sucesso de bilheteria, arrecadando 59 754 601 dólares em todo o mundo.')
    console.log('Run\nSobre o Run: O filme recebeu críticas geralmente positivas dos críticos e se tornou o filme original de maior sucesso da Hulu após seu lançamento.')

}else console.log('Não conseguimos te atender.')