let nomes = ['ana Julia','Caio vinius','BIA silva'];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);

let numeros =  [1,2,3,4,5];

const quadrados = numeros.map(function (numero){
    return Math.pow(numero,2);
});

console.log(quadrados);
