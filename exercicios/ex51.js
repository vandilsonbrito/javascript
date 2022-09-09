const receberPrimeiroEUltimoElemento = (array) => {
    let novoArray = []
    novoArray[0] = array.shift()
    novoArray[1] = array.pop()
    return console.log(novoArray)
}
receberPrimeiroEUltimoElemento([7, 14, "olá"])