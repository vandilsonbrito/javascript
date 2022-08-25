const funcMultiplicacao = (array, numero) => {
    let arrayMultiplicado = []
    for(let i = 0; i < array.length; i++) {
        arrayMultiplicado[i] = array[i] * numero
        
    }
    console.log(arrayMultiplicado)
}
funcMultiplicacao([5, 3, 1], 2)

const funcMultiVerificacao = (array, numero) => {
    let arrayMultiplicado = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 5) {
            arrayMultiplicado[i] = array[i] * numero
        }
        
    }

    let arrayMultiplicadoSemVazios = arrayMultiplicado.filter(function (i) {
        return i;
      });

    console.log(arrayMultiplicadoSemVazios)
}
funcMultiVerificacao([51, 1, 10], 2)