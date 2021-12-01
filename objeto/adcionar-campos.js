/*
    ADICIONADO PROPRIEDADES AO OBJETO
*/
// const cliente = {
//     nome:"andré",
//     idade:36,
//     cpf:"12345678910",
//     email:"andre@email.com"
// }

// console.log(cliente)

// cliente.fone = "11976340280";
// cliente.endereco = "";

// console.log(cliente)

// cliente.fone = "119764444";
// cliente.endereco = "rua araguaia";
// console.log(cliente)

/*
   REMOVENDO PROPRIEDADES AO OBJETO
*/

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined