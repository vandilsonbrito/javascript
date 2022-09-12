function funcaoDaSorte(numero) {
    let numAleatorio = (Math.random() * (10 - 1) + 1).toFixed(0)
    if(numero == numAleatorio) {
        console.log(`Parabéns! O número sorteado foi o ${numAleatorio}.`) 
    }
    else {
        console.log(`Que pena! O número sorteado foi o ${numAleatorio}.`)
    }
} 

funcaoDaSorte(4)