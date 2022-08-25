const intervalo = (array) => {
    let qtdDentro = 0, qtdFora = 0

    function auxiliar(array) {
        return array >= 10 && array <= 20
    }
    
    qtdDentro = array.filter(auxiliar).length
    qtdFora = (array.length - qtdDentro)

    console.log("O vetor possui " + qtdDentro + " número(s) dentro do intervalo e "  + qtdFora + " fora do intervalo")
}
intervalo([1, 15, 17, 25, 10])