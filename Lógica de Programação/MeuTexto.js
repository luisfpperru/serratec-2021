let texto = 'Algumas linguagens" só assim';

var nome = "Braya";

texto = "Bem-vindo " + nome + " !!";
console.log(texto);

texto = `Bom dia ${nome} o restante continua sendo texto `;
console.log(texto);

nome = "Gabbi";
let dia = 9;
let curso = "Lógica de programação";
let fase = 2;

texto = `Bom dia sra. ${nome} ! 
Seja bem-vinda ao dia ${dia} do nosso curso ${curso} .. 
Estamos na fase ${fase} e é o último dessa temporada :(`;

console.log(texto);

//Interpolação

let A = 5;

texto = `Estamos falando de...
dois mais a: ${2 + A}
abs de 500: ${Math.abs(-500)}
cinquanto: ${50 > 49}
expressões JS = ${2 + 2} <== nesse lugar
`;
