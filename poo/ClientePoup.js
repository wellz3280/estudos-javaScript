class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor)
    {
        this.saldo += valor;
    }

    exibirSaldo()
    {
        console.log( this.saldo);
    }
}

// herança

class ClientePoupanca extends Cliente
{
    constructor(nome,email,cpf,saldo,saldoPoupanca)
    {
        //= parent__construct();
        super(nome,cpf,email,saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor)
    {
        this.saldoPoupanca += valor;
    }

    exibirSaldoPoupanca()
    {
        console.log(this.saldoPoupanca);
    }
}

const weliton = new ClientePoupanca('weliton','35578945678','weliton@weliton.com',100,0);

weliton.depositar(50);
weliton.exibirSaldo();
weliton.depositarPoupanca(100);
weliton.exibirSaldoPoupanca();