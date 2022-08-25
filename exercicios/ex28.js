function vetorParEimpar(array) {
    let qtdPar = 0, qtdImpar = 0

    for(let i = 0; i < array.length; i++) {
        if((array[i] % 2) === 0) {
            qtdPar++
            
        }
        else if((array[i] % 2) !== 0) {
            qtdImpar++
            
        }
    }
    //return qtdPar, qtdImpar
    console.log("Exsite(m) " + qtdPar + " número(s) par(es).")
    console.log("Exsite(m) " + qtdImpar + " número(s) ímpar(es).")
}

vetorParEimpar([2, 5, 9, 45, 78, 26, 5])