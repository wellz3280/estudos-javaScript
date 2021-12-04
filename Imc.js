function Imc(nome,peso,altura)
{
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;

    this.calculaImc = function()
    {
        const imc = this.peso/(altura * altura);

        console.log(`${this.nome} seu imc é de ${imc}`)
    }
}

const teste = new Imc ('weliton',91,1.80);

teste.calculaImc();