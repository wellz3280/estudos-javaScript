const clientes = [
    {
        nome:"André",
        cpf:12345678910,
        
        dependentes:[
            {
                nome:"sarah",
                parentesco:"filha",
                dataNasc:"20/03/2011"
            },
            {
                nome:"Samia",
                parentesco:"filha",
                dataNasc:"04/02/2014"

            }
        ]
    },
    {
        nome:"Juliana",
        cpf:"26529978803",
        dependentes:[
            {
                nome:"Sophia",
                parentesco:"filha",
                dataNasc:"30/08/2020"
            }
        ]
    }
]


//operador de espalhamento
for(let i = 0; i < 2; i++){
    const listaDependentes = [... clientes[i].dependentes];
    console.log(listaDependentes)
}