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
        }
    ]
}

cliente.dependentes.push({
    nome:"weliton",
    parentesco:"filho",
    dataNasc:"10/09/2012"
})

 //console.log(cliente)

 const filha = cliente.dependentes.filter(dependente => dependente.dataNasc === "20/03/2011")

 console.log(filha[0].nome)