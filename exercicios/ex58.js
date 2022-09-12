function calcularMedia(array) {
    let soma = 0
    array.forEach(elemento => soma+= elemento);
    return (soma / array.length)
}

let array = [1, 2, 3, 4, 5, 9]

console.log(calcularMedia(array))