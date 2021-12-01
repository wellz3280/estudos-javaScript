const cliente = {
    nome:"andré",
    idade:36,
    cpf:"12345678910",
    email:"andre@email.com",
    fones:['11976340580','11978546542'],
    
    dependentes: [
        {
            nome:"sarah silva",
            parentesco:"filha",
            dataNasc:"20/03/2011"
        },
        {
            nome:"weliton",
            parentesco:"filho",
            dataNasc:"10/09/2012"
        }
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor;
    },
    sacar:function(valor)
    {
        this.saldo -= valor;
    }
}

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);

cliente.sacar(40);

console.log(cliente.saldo);