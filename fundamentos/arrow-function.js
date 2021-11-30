const apresentarArrow = nome => `meu nome é ${nome}`;

const soma = (nun1,nun2) => nun1 + nun2;

console.log(soma(1,1))

const somaNumerosPequenos = (num1,num2) =>{
	if(num1 > 10 || num2 > 10){
		return "Somente numeros de 1 a 9";
	}else {
		return num1 + num2;
	}
}

console.log(somaNumerosPequenos(2,6))