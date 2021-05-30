/*
    Método do Gradiente consiste num método de otimização utilizado minimizar, encontrar o mínimo valor da função objetivo().
    Para tal o método sempre atualiza na direção de descida atual, a direção aproximada do gradiente.

*/ 

const N = 3; // tamanho problema
const k = 10;  // número de iterações
const lambda = 0.5; // tamanho do passo do método

let solucao_atual = random_vector(N);
let solucao_anterior = random_vector(N);
let valor_solucao_atual = objetivo(solucao_atual); 
let valor_solucao_anterior = objetivo(solucao_anterior);

console.log('Valor: ',valor_solucao_atual);
console.log('Solucao: ',solucao_atual);

let aux = new Array(N), valor_aux;
if (valor_solucao_anterior < valor_solucao_atual){
    aux = solucao_anterior;
    valor_aux = valor_solucao_anterior;
    solucao_anterior = valor_solucao_atual;
    valor_solucao_anterior = valor_solucao_atual;
    solucao_atual = aux;
    valor_solucao_atual = valor_aux;
}

console.log('Valor: ',valor_solucao_atual);
//console.log('Solucao: ',solucao_atual);

let DeltaY, DeltaX;
for (let j = 1; j <= k; j++){
// CALCULO DO GRADIENTE E ATUALIZAÇÃO DA SOLUÇÃO

    DeltaY = valor_solucao_atual - valor_solucao_anterior;
    //console.log('Delta Y',j,': ',DeltaY);
    for (let i = 0; i < N; i++){
        DeltaX = solucao_atual[i] - solucao_anterior[i];
        //console.log('Delta X',j,': ',DeltaX);
        solucao_anterior[i] = solucao_atual[i];
        solucao_atual[i] = solucao_atual[i] - lambda*(DeltaX/DeltaY);
    }  
    valor_solucao_anterior = valor_solucao_atual;
    valor_solucao_atual = objetivo(solucao_atual);

    // SAIDA
    console.log('Valor',j,': ',valor_solucao_atual);
    //console.log('Solucao',j,': ',solucao_atual);
}

function random_vector(N){ // gera um novo vetor aleatório com valores entre 0 e 1;
    let vector = new Array(N);
    for (let i = 0; i < N; i++)
        vector[i] = Math.random()
    return vector;
}
function objetivo(x){
    let soma = 0.0;
    for (let i = 0; i < x.length; i++)
        soma += Math.pow(x[i],2);
    return soma;
} // função com o funcional a qual deve ser minimiza
    





