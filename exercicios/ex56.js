function somarNumeros(array) {
    let soma = 0
    array.forEach(elemento => soma+= elemento)

    return soma
}

const arrayDeNumeros = [5, 2, 3, 10]

console.log(somarNumeros(arrayDeNumeros))

// Outra solução

function somarNumeros2(array){
    const soma = array.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}

console.log(somarNumeros2(arrayDeNumeros))