// Etapa 1
let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

tarefas.push('Fazer a unha', 'Lavar o cabelo');
console.log("Lista de tarefas atualizada:");
console.table(tarefas);
console.log("________________");

// Etapa 2
let removerUltimaTarefa = tarefas.pop();
console.log(`Última tarefa foi removida: ${removerUltimaTarefa}`);
console.log("________________");

// Etapa 3
tarefas.unshift("Passar aspirador de pó");
let tarefaNoInicio = tarefas.unshift();
console.log(`Lista com nova tarefa adicionada no ínico: ${tarefas}`);
console.log("________________");

// Etapa 4
let removerPrimeiraTarefa = tarefas.shift();
console.log(`Primeira tarefa removida: ${removerPrimeiraTarefa}`);
console.log("________________");

// Etapa 5
console.log(`A lista de tarefas inclui 'Ir à academia'? ${tarefas.includes('Ir à academia')}`);
console.log("________________");

// Etapa 6
tarefas.join(", ");
console.log(tarefas);
console.log("________________");

// Etapa 7
console.log(`Tarefas extraídas do índice 2 ao 4: ${tarefas.slice(2, 5)}`);
console.log("________________");

// Etapa 8
console.log("Lista de tarefas inicial:");
console.table(tarefas);

let tarefaAlterada = tarefas.splice(3, 1, 'Varrer a casa');
console.log(`Tarefa alterada: ${tarefaAlterada}`);
console.log("Lista de tarefas atualizada:");
console.table(tarefas);
console.log("________________")

// Etapa 9
let novasTarefas = ['Passar aspirador de pó', 'Lavar o cabelo', 'Colocar gasolisa no carro', 'Calibrar o pneu', 'Levar pet no veterinário']
console.log("Lista de novas tarefas:");
console.table(novasTarefas);
let tarefasCombinadas = ${tarefas.concat(novasTarefas).join(', ')}
console.log(`Lista de tarefas combindas: ${tarefasCombinadas}`);
console.log("________________")

// Etapa 10
let palavraAdicionada = "Fazer ";
let novaLista = novasTarefas.map(tarefa => `${palavraAdicionada} ${tarefa}`);

console.log(novaLista);
