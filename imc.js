const pessoa = {
    nome:"",
    peso:0,
    altura:0
}

// imc = peso/(altura * altuta)

let imc;
pessoa.nome = "karla";
pessoa.peso = 65;
pessoa.altura = 1.59;

imc = pessoa.peso/(pessoa.altura * pessoa.altura);

console.log(`${pessoa.nome} seu imc: ${imc}`)