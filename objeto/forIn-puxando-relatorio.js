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
    }
}

cliente.depositar(40);

let relatorio = "";

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
     relatorio += ` 
        ${info} = ${cliente[info]}`;
    }
}

console.log(relatorio)