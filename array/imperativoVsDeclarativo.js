const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativo    // ESSA FORMA SE PREOCUPA MAIS EM como É FEITO, DE FORMA MINUCIOSA
let total1 = 0
for(let i = 0;i < alunos.length; i++){
    total1 += alunos[i].nota 
}
console.log(total1 / alunos.length)

// Declarativo   // ESSA FORMA SE PREOCUPA COM O RESULTADO E FACILITA O REUSO DAS FUNÇÕES
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)


// select codigo, nome, email from clientes where ativo = 1            || código SQL || é declarativo