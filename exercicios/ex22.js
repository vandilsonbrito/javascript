const anuidade = (mes, valor) => {
    let resultado = 0
    switch(mes) {
        case 1:
            console.log("Valor total da anuidade: R$" + valor.toFixed(2))
            break
        case 2:
            resultado = valor * (Math.pow((1 + 0.05), 1))
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))//.toFixed(2))
            break
        case 3:
            resultado = valor * Math.pow((1 + 0.10), 2)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
        case 4:
            resultado = valor * Math.pow((1 + 0.15), 3)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
        case 5: 
            resultado = valor * Math.pow((1 + 0.20), 4)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
        case 6: 
            resultado = valor * Math.pow((1 + 0.25), 5)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
        case 7: 
            resultado = valor * Math.pow((1 + 0.30), 6)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
        case 8: 
            resultado = valor * Math.pow((1 + 0.35), 7)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
        case 9: 
            resultado = valor * Math.pow((1 + 0.40), 8)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
        case 10: 
            resultado = valor * Math.pow((1 + 0.45), 9)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
        case 11: 
            resultado = valor * Math.pow((1 + 0.50), 10)
            console.log("Valor total da anuidade: R$" + resultado.toFixed(2))
            break
    }
}

anuidade(2, 100)