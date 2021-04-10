/*

No tablet da lanchonete, o cliente pode escolher dois complementos para
o seu lanche. Apenas se marcar algum item de salada, pode também
escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a
cozinha.

:Lanchonete:
Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles
Item 1: B
Item 2: T
Adicionar molho: Não
[Cozinha]
Lanche com Bacon e Tomate, sem molho.

*/

//Leitura
const ler = require("prompt-sync")();

console.log(":Lanchonete:")

//ENTRADA
let complemento1 = ler("Qual complemento deseja no seu lanche? Digite Q= queijo, B= bacon, A= alface, T= tomate, P= picles: ");
let complemento2 = ler("Qual outro complemento deseja no seu lanche? Digite Q= queijo, B= bacon, A= alface, T= tomate, P= picles: ");
if (complemento1 == "A" || complemento1 == "T" || complemento2 == "A" || complemento2 == "T")
    molho = ler("Adicionar molho? ");

// PROCESSAMENTO
let mensagem1 = "";
let mensagem2 = "";
let mensagem3 = "";

if (complemento1 == "Q")
    mensagem1 = "Queijo";
if (complemento1 == "B")
    mensagem1 = "Bacon";
if (complemento1 == "A")
    mensagem1 = "Alface";
if (complemento1 == "T")
    mensagem1 = "Tomate";
if (complemento1 == "P")
    mensagem1 = "Picles";

if (complemento2 == "Q")
    mensagem2 = "Queijo";
if (complemento2 == "B")
    mensagem2 = "Bacon";
if (complemento2 == "A")
    mensagem2 = "Alface";
if (complemento2 == "T")
    mensagem2 = "Tomate";
if (complemento2 == "P")
    mensagem2 = "Picles";

if (molho = "Sim" || molho == "sim")
    mensagem3 = " com molho ";
if (molho = "Não" || molho == "não")
    mensagem3 = " sem molho ";

//SAIDA
console.log("[Cozinha]");
console.log("Lanche com " + mensagem1 + " e "+ mensagem2 + ","+ mensagem3 +".");