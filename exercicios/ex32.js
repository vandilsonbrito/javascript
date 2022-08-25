const mediaAritmetica = (array) => {
    let resultado = 0

    for(let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    resultado = resultado / array.length
    console.log("Média aritmética: " + resultado)
}

mediaAritmetica([5, 4, 10, 17])