function contarPalavras(palavras) {
    let contador = 0
    for (let index = 0; index < palavras.length; index++) {
        if(palavras[index] == ' '){
            contador++
            
        }
    }
    return contador + 1 // + 1: Antes do primeiro espaço para o que foi proposto, sempre terá uma palavra
    
    
}
console.log(contarPalavras('Me divirto aprendendo a programar'))

// Outra opção

function contarPalavras2(palavras) {
    const frase = palavras.split(" ")
    return frase.length
}

console.log(contarPalavras2('Me divirto aprendendo a programar'))

