class Arvore
{
	constructor(nodo)
	{
		this.nodo = nodo;
	}


	maiorValor(array)
	{
		return this.valorMaximo =  Math.max.apply(Math,array);
	}
	
	menorValor(array)
	{
		return this.valorMinino =  Math.min.apply(Math,array);
	}

	distribuir()
	{
		

		//Pegando o maior e o menor valor
		const menorValorArvore = this.menorValor(this.nodo);
		const maiorValorArvore = this.maiorValor(this.nodo);

		//Pegando o indice 
		const indiceMaior = this.nodo.indexOf(maiorValorArvore);
		const indiceMenor = this.nodo.indexOf(menorValorArvore);
		
		let novoIndiceMaiorValor = 0;
		let novoIndiceMenorValor = 0;
		
		
		  	
		
			

	}

	exibirArvore()
	{
		console.log(this.nodo);
	}
}

const teste = new Arvore([25,44,78,99,54,2,1,3,5,7]);

teste.distribuir();
teste.exibirArvore();

// // Funcao para retornar o menor valor de um array
// Array.min = function(array) {
//     return Math.min.apply(Math, array);
// };

// // Funcao para retornar o maior valor de um array
// Array.max = function(array) {
//     return Math.max.apply(Math, array);
// };

// // Agora e so pegar os resultados
// var random = [2, 3, 1, 4, 6, 5];  // Nosso array
// console.log( Array.min(random) ); // Menor valor
// console.log( Array.max(random) ); 
// let teste = new Arvore(32);
// teste.distribuir(2);

// class MaiorMenor
// {
// 	constructor(arrayNumeros)
// 	{
// 		this.arrayNumeros = arrayNumeros;
// 	}

// 	maior(valor)
// 	{
// 		let indice = this.arrayNumeros
// 		this.maior =  Math.max.apply(Math,this.arrayNumeros);

// 	}

// 	menor()
// 	{
// 		return Math.min.apply(Math,this.arrayNumeros);
// 	}
// }


// const teste = new MaiorMenor([54,25,78,65,788,24]);
// console.log(teste.menor());

// var arr = [];
// arr[0] = "Jani";
// arr[1] = "Hege";
// arr[2] = "Stale";
// arr[3] = "Kai Jim";
// arr[4] = "Borge";

// console.log(arr.join());
// arr.splice(2, 0, "Lene");
// console.log(arr.join());