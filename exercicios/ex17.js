const aumento = (planoDeTrabalho, salarioAtual) => {
    let novoSalario = 0
    switch(planoDeTrabalho) {
        case 'A': 
            novoSalario = ((10/100 * salarioAtual) + salarioAtual)
            console.log("O novo salário é de R$" + novoSalario.toFixed(2))
            break
        case 'B': 
            novoSalario = ((15/100 * salarioAtual) + salarioAtual)
            console.log("O novo salário é de R$" + novoSalario.toFixed(2))
            break
        case 'C': 
            novoSalario = ((20/100 * salarioAtual) + salarioAtual)
            console.log("O novo salário é de R$" + novoSalario.toFixed(2))
            break
        default:
            console.log("Plano inválido.")
    }
}

aumento('C', 1500)