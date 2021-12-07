class Fila
{
	constructor(fila  = [])
	{
		this.fila = fila;
	}

	entrarNaFila(pessoa)
	{
		this.fila.push(pessoa);

		console.log(this.fila);
	}

	sairDaFila()
	{
		this.fila.shift();
		console.log(this.fila);

	}
}

const testeFila = new Fila();

testeFila.entrarNaFila('welinton');
testeFila.entrarNaFila('Andrea');
testeFila.entrarNaFila('Gabrielle');

testeFila.sairDaFila();

