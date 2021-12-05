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

const weliton = new Cliente('weliton','weliton@email.com','333.445.555-78',100)
console.log(weliton)
weliton.depositar(100)
console.log(weliton)
weliton.exibirSaldo();