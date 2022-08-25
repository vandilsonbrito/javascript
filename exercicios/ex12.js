const fatorial = (numero) => {
    let resultado = 1
    for(let i = numero; i > 1; i--) {
        resultado = resultado * (i - 1)  
    }
    return resultado = resultado * numero
    
}

console.log(fatorial(2))