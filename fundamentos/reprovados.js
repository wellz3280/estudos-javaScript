const nomes = ['weliton','karla','josé Wedson','raquel'];
const notas = [7,4.5,8,7.5];

const reprovados = nomes.filter((_,indice) => 
    notas[indice] < 5
);

console.log(reprovados);