function contarCaractere(caractere, string) {
    let contador = 0
    for (let index = 0; index < string.length; index++) {
            if(caractere === string.charAt(index)) {
                contador++
            }
    }
    return contador
}

console.log(contarCaractere("c", "Conhece-te a ti mesmo"))

// Outra opção

function contarCaractere2(caractereBuscado, string) {
    return [...string].filter(caractere => caractere === caractereBuscado).length
}
console.log(contarCaractere2("c", "Conhece-te a ti mesmo"))

