const nomes = [
    'João ', 'Juliana', 'Ana',
    'Caio','Lara','Marjorie', 'Guilherme',
    'Aline', 'Fabiana','Andre','Carlos','Paulo',
    'Bianca','Vivian','Isabela','Vinicius','Renan',
    'Renata','Daisy','Camilo'
];

// MÉTODO SLICE DIVIDE UM ARRAY EM PARTES

// const sala1 = nomes.slice(0,nomes.length/2);

// const sala2 = nomes.slice(nomes.length/2);

// console.log(`alunos da sala1: ${sala1}`);
// console.log(`alunos da sala2: ${sala2}`);

/* 
    ALTERANDO SLICE
    ATUALIZANDO LISTA 
*/

const listaDeChamada = [
    'João ', 'Ana', 'caio',
    'Lara','Marjorie', 'leonardo'
];

// Permite que removemos qualquer elemento do array e adicionar tambem
// Splice pede 3 parametros inicio indice, quatidade de elementos a ser ramovidos, e elemento adicionado.
listaDeChamada.splice(1,0, 'Rodrigo','Rogério');

console.log(listaDeChamada);


