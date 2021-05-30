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
console.log("Complementos: Digite Q= queijo, B= bacon, A= alface, T= tomate, P= picles ")

//ENTRADA
let item1 = ler("Item 1: ");
let item2 = ler("Item 2: ");
if (item1 == "A" || item1 == "T" || item2 == "A" || item2 == "T")
    molho = ler("Adicionar molho? ");

// PROCESSAMENTO
let msg1 = "";
let msg2 = "";
let msg3 = "";

if (item1 == "Q")
    msg1 = "Queijo";
if (item1 == "B")
    msg1 = "Bacon";
if (item1 == "A")
    msg1 = "Alface";
if (item1 == "T")
    msg1 = "Tomate";
if (item1 == "P")
    msg1 = "Picles";

if (item2 == "Q")
    msg2 = "Queijo";
if (item2 == "B")
    msg2 = "Bacon";
if (item2 == "A")
    msg2 = "Alface";
if (item2 == "T")
    msg2 = "Tomate";
if (item2 == "P")
    msg2 = "Picles";

if (molho = "Sim" || molho == "sim")
    msg3 = " com molho ";
if (molho = "Não" || molho == "não")
    msg3 = " sem molho ";

//SAIDA
console.log("[Cozinha]");
console.log("Lanche com " + msg1 + " e "+ msg2 + ","+ msg3 +".");