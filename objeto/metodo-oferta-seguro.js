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

function oferecerSeguro(obj){

    const propsClientes = Object.keys(obj);
    
    //metodo includes verifica se o parametro passado esta incluso no array. Retorna um booleano
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
    // console.log(Object.entries(cliente))
    // console.log(Object.values(cliente))
    oferecerSeguro(cliente);

