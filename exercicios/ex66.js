objeto = {a: 1, b: 2, c: 3}

function inverter(objeto) {
    let arrayDeValores = Object.keys(objeto).map(function(key){
        return [objeto[key], key]  
    })
    
    const novoObjeto = Object.fromEntries(arrayDeValores)
    return novoObjeto
}

console.log(inverter(objeto))

