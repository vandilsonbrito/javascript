function menorNumero(array) {
    let menor = array[0]
    for (let index = 0; index < array.length; index++) {
        menor > array[index] ? menor = array[index] : menor
    }
    return menor
}

let array = [25, -41, 21, 35, 9]

console.log(menorNumero(array))

// Outra opção

function menorNumero2(array) {
    return Math.min(...array)
}

console.log(menorNumero2(array))