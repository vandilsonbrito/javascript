segundoMaior = (array) => {
    arrayOrdenado = array.sort((a, b) => a - b)
    return array[array.length - 2]
}

console.log(segundoMaior([1, 28, 5, 47, 25, 6]))