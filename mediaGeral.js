const salaJs = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

// reduz o valor de um array em um unico numero que é a soma de todos os elementos
function mediaSala(notasDaSala){
    const somadasNotas = notasDaSala.reduce((acumulador, atual) => 
        atual + acumulador,0
    );
    return somadasNotas/notasDaSala.length;
}

console.log(`Média da sala de Javascript: ${mediaSala(salaJs)}`)
console.log(`Média da sala de Java: ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python: ${mediaSala(salaPython)}`)

const notas = [10,6.5,8,7];

const media = notas.reduce(
    (acumula, valorAtual) =>
    valorAtual + acumula,0     
)/ notas.length;

console.log(media);