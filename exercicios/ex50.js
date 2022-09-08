const simboloMais = (numero) => {
    let vetor = [], simbolo = '', mais = "+"
    for(let i = 0; i < numero; i++) {
        simbolo = simbolo + mais
    }
    //for(let i = 0; i < numero; i++) {
       // console.log(vetor[i])
    //}
    return console.log(`"${simbolo}"`)
}

simboloMais(10)