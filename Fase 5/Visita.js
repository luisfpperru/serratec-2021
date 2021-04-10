/*


O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos
impressos, tanto nos plurais quanto na quantidade de visitas.

Visitas: 1 
Você já nos visitou uma vez
...
Visitas: 2
Você já nos visitou duas vezes
...
Visitas: 3
Você já nos visitou 3 vezes
...

*/

//Leitura
const ler = require("prompt-sync")();


console.log("=======SISTEMA ANFITRIÃO=======");

//ENTRADA
let visita = ler("Qual o número da visita? ");
let mensagem = "";
if (visita == 1)
    mensagem = "Você já nos visitou uma vez.";
else if (visita == 2)
    mensagem = "Você já nos visitou duas vezes."
else 
    mensagem = "Você já nos visitou " + visita + " vezes."

//SAIDA
console.log("Visitas: ",visita);
console.log(mensagem);
console.log("...");