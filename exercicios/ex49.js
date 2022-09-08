const repetir = (valor1, valor2) => {
    let resultado = []
    for(let i = 0; i < valor2; i++) {
        resultado[i] = valor1
    }
    return resultado
}

console.log(repetir("código", 5))