const cliente = {
    nome:"andré",
    idade:36,
    cpf:"12345678910",
    email:"andre@email.com"
}

const chaves = ["nome","idade","cpf","email"];

// console.log(cliente[chaves[3]])

chaves.forEach(info => console.log(cliente[info]))