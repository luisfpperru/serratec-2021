/*

O “mini DP” aumentou seus cálculos. Agora, considere a jornada de
trabalho semanal de um funcionário, que é de 40 horas. O funcionário que
trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da
hora regular com um acréscimo de 50%. Considerando que o mês possui 4
semanas exatas, e que a entrada de horas será um valor maior que a
jornada normal.
a. Salário base (valor da hora * horas normais)
b. Valor de horas extras
c. Valor do desconto para o INSS (considerei 8% de desconto)
d. Salário líquido (Salário base + horas extras – desconto INSS)
e. Imprimir na tela o contracheque do funcionário.

*/


const ler = require("prompt-sync")();

console.log("============ MINI DP ===========")


// ENTRADA
let valor_hora = ler("Digite o valor da hora de trabalho: ");
let horas = ler("Digite o valor das horas semanais trabalhadas: ");

//PROCESSAMENTO
let salario_base = valor_hora *40*4; 
let horas_extras = (1.5*valor_hora)*(horas - 40)*4; // (valor de cada hora extra)*(número de horas extras semanais)*4 semanas
let valor_desconto = 0.08*(salario_base + horas_extras);
let salario_liquido = salario_base + horas_extras - valor_desconto;

console.log("Salário Base: ",salario_base);
console.log("Valor horas extras: ",horas_extras);
console.log("Desconto da previdência: ",valor_desconto);
console.log("Salário liquido: ",salario_liquido);