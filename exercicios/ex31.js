const numNegativos = (array) => {
    let qtdNegativo = 0

    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            qtdNegativo++
        }
    }

    console.log("Quantidde de número(s) negativo(s): " + qtdNegativo)
}

numNegativos([5, -90, -30, 56, 114, 85, 4])