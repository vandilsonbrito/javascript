function buscarPalavrasSemelhantes(palavra, arrayStrings) {
    let arrayPalavrasSemelhantes = []
    for(let string of arrayStrings) {
        if(string.includes(palavra)) {
            arrayPalavrasSemelhantes.push(string)
        }
    }
    return arrayPalavrasSemelhantes
    
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
