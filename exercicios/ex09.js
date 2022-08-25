const arredondar = (nota) => {return Math.ceil(nota / 5) * 5;}
verificandoNota = (nota) => {
    let notaArredondada = arredondar(nota)
    if(nota >= 40) {
        if((notaArredondada - nota) < 3) {
            nota = notaArredondada
        }
        console.log("Aluno aprovado!")
        console.log("Nota: " + nota)
        
    }
    else if(nota >= 38) {
        console.log("Nota: " + arredondar(nota))
        console.log("Aluno aprovado!")
    }
    else if(nota < 38) {
        console.log("Aluno reprovado!")
    }
    else {
        console.log("Erro, verifique os dados e insira novamente")
    }
}
console.log(verificandoNota(38))