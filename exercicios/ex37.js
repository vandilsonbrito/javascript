const formPA = (nTermos, a1, razao) => {
    let PA = []
    for( let i = 0; i < nTermos; i++) {
        PA[i] = a1 + ((i + 1) - 1) * razao 
    }
    console.log(PA)
}

formPA(5, 2, 0)

const formPG = (nTermos, a1, razao) => {
    let PG = []
    for( let i = 0; i < nTermos; i++) {
        PG[i] = a1 * Math.pow(razao, ((i + 1) - 1)) 
    }
    console.log(PG)
}

formPG(5, 3, 3)