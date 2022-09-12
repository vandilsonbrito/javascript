function contarPalavraas(palavras) {
    let contador = 0
    for (let index = 0; index < palavras.length; index++) {
        if(palavras[index] == ' '){
            contador++
            
        }
    }
    return contador + 1 // + 1: Antes do primeiro espaço para o que foi proposto, sempre terá uma palavra
    
    
}
console.log(contarPalavraas('Me divirto aprendendo a programar'))