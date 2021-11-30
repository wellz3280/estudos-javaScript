const notas = [10,6.5,8,7.5];

let somaNotas = 0;

//callback com arrow function
// notas.forEach(nota =>{
//     somaNotas += nota;
// });

notas.forEach(function (nota){
    somaNotas += nota;
});

let media = somaNotas/notas.length;

console.log(media);