/*

O programa “mini departamento pessoal” lê a quantidade de horas
trabalhadas por um funcionário em um mês, o valor que ele recebe por
hora e o percentual de desconto para o INSS, e calcula:
a. O salário bruto (horas trabalhadas * valor hora)
b. O valor do desconto para o INSS
c. O salário líquido (adicionais menos descontos).
d. Após os cálculos, será impresso o contracheque. O contracheque é a
exibição no console das informações com formatação: Salário bruto,
valor do desconto do INSS, e o salário líquido do funcionário.

*/

const ler = require("prompt-sync")();

console.log("============ MINI DEPARTAMENTO PESSOAL =============");

//ENTRADA
let valor_hora = ler("Digite o valor da hora de trabalho: ");
let horas_mensais = ler("Digite o valor das horas mensais trabalhadas: ");
let percentual_desconto = ler("Digite o percentual de desconto para a previdência: ");

//PROCESSAMENTO
let salario_bruto = valor_hora * horas_mensais; 
let valor_desconto = percentual_desconto * salario_bruto;
let salario_liquido = salario_bruto - valor_desconto;

console.log("Salário Bruto: ",salario_bruto);
console.log("Desconto da previdência: ",valor_desconto);
console.log("Salário liquido: ",salario_liquido);