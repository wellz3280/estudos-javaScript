function Cliente(nome,cpf,email,saldo){
    
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const weliton = new Cliente('weliton','12345678910','weliton@weliton.com',100)

weliton.depositar(100)

console.log(weliton.saldo)