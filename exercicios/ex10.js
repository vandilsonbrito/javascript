const divisivel = (numero) => {
    let operacao = numero % 3
    if(operacao === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(divisivel(3))