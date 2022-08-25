const valorConvenio = (idade) => {
    let valor = 100
        
    if(idade > 0 && idade < 10) {
        valor += 80
    }
    if(idade >= 10 && idade < 30) {
        valor += 50
    }
    if(idade >= 30 && idade <= 60) {
        valor += 95
    }
    if(idade >= 60) {
        valor += 130
    }

    return console.log("Valor final do convênio: R$" + valor.toFixed(2))
}

valorConvenio(1)