class Pessoa{
    constructor(nome,sobrenome,cpf,email,nascimento){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.nascimento = nascimento;
    }

    //método
    exibeNomeCompleto()
    {
        console.log(`${this.nome} ${this.sobrenome}`)
    }

    idade()
    {
        console.log(2021 - this.nascimento + ' anos')
    }
}

const weliton = new Pessoa('weliton','silva','36529972810','weliton@weliton.com',1986)

weliton.exibeNomeCompleto();
weliton.idade();

console.log(weliton.nascimento)