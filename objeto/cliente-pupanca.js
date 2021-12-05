function Cliente(nome,cpf,email,saldo){
    
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;

    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    //herdando uma classe   
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
 
}

const juliana = new ClientePoupanca('juliana','32145678922','ju@rmail.com',100,200);

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

ClientePoupanca.prototype.transfParaPoup = function(valor){
    this.saldo -= valor;
    this.saldoPoup += valor;
}

juliana.depositarPoup(50)

console.log(juliana)

juliana.transfParaPoup(50)
console.log(juliana)