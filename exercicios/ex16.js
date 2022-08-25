const calculadora = (num1, operacao, num2) => {
    let resultado = 0
    switch(operacao) {
        case '+':
            resultado = num1 + num2
            console.log("Resultado da soma: " + resultado)
            break
        case '-':
            resultado = num1 - num2
            console.log("Resultado da subtração: " + resultado)
            break
        case '*':
            resultado = num1 * num2
            console.log("Resultado da multiplicação: " + resultado)
            break
        case '/':
            resultado = num1 / num2
            console.log("Resultado da divisão: " + resultado)
            break
        default:
            console.log("Operação inválida!")
    }
}

calculadora(6, "/", 3)