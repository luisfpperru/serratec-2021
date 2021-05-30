/*

Criar uma função que recebe um número , e retorna se ele é negativo, positivo ou zero.

*/

function classifica(numero) {
  if (numero > 0) return "Positivo";
  if (numero < 0) return "Negativo";
  return "Nulo";
}

console.log(11, classifica(11));
console.log(-5, classifica(-5));
console.log(0, classifica(0));
