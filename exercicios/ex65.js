function removerVogais(string) {
    return string.replace(/[aeiouà-ú]/gi, "")
}

console.log(removerVogais("Fundamentos"))

// Outra opção

function removerVogais2(string) {
    const vogais = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

    vogais.forEach( vogal => string = string.replace(vogal, ''))

    return string 
}
console.log(removerVogais2("Fundamentos"))