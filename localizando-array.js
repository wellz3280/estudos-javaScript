const alunos = ['weliton','mariana','victor','karla'];

 const mediaAlunos = [10,7,9,6];

let listaDeNotasEalunos = [alunos,mediaAlunos];

// includes retorna um booleano
// indexOf retorna um inteiro
const exibeNomeNota = (nomeDoaluno) =>{
    if(listaDeNotasEalunos[0].includes(nomeDoaluno)){
        
        let indice = listaDeNotasEalunos[0].indexOf(nomeDoaluno);

        return listaDeNotasEalunos[0][indice] + ', sua média é ' 
        + listaDeNotasEalunos[1][indice];

    }else{
        return `Aluno ${nomeDoaluno} não esta cadastrado`;
    }
}


console.log(exibeNomeNota('erick'));