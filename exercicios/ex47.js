const estaEntre = (numero, minimo, maximo, inclusivo) => {
    if(inclusivo == undefined || inclusivo == false) {
        if(numero > minimo && numero < maximo) {
            return true
        }
        else {
            return false
        }
    }
    else if(inclusivo == true) {
        if(numero >= minimo && numero <= maximo) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(estaEntre(50, 50, 100, true))