const simboloMais = (numero) => {
    let simbolo = '', mais = "+"
    for(let i = 0; i < numero; i++) {
        simbolo = simbolo + mais
    }
    
    return console.log(`"${simbolo}"`)
}

simboloMais(10)