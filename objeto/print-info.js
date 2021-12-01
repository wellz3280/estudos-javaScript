const cliente = {
    nome:"Welington",
    idade:365,
    cpf:"36529972803",
    email:"andre@email.com"
}


const tamanhoString = nome => nome.length;

console.log(tamanhoString(cliente.cpf));
// console.log(`Cliente :${cliente.nome}`)
// console.log(cliente.cpf.substring(0,3))