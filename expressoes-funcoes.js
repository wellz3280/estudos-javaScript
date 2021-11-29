//funções declarativas
// pode-se chamar a função antes dela estar escrita
// o javascript lista primeiro as var e funcoes declativas
console.log(multiplica(2,2))


function multiplica(n1 = 1 , n2 = 1) {
	return n1 * n2;
}



//funções e var são listadas no topo


//expressões de funções
// Não pode ser chamada antes do código 

const soma = function (num1,num2) {
	return num1 + num2;
}

console.log(soma(1,1))


 