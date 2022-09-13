filtrarPorQuantidade = (array, qtdDigitos) => {
    return array.filter(elemento => (elemento).toString().length === qtdDigitos)
}

array = [11, 16, 1, 5]

console.log(filtrarPorQuantidade(array, 1))