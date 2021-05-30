/*

A bilheteria tem apenas 7 poltronas disponíveis pra estreia do filme

*/

for (var ingresso = 43; ingresso <= 50; ingresso++){
    if (ingresso == 46){
        console.log{"Interrompido pois o nro 46 tem prioridade"}
        continue
    }
  console.log("Você comprou o ingresso nro. ", ingresso);
}
console.log("Sessão das 18h 30 cheia.");
