let array = [1, 2, 3, 4, 50]

function receberSomenteOsParesDeIndicesPares(array) {
    let filtro = array.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0

        return numeroPar && indicePar
    })
    return filtro
    
    
}

console.log(receberSomenteOsParesDeIndicesPares(array))