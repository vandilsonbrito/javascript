const inverso = (valor) => {
    if(valor === typeof(Boolean)){
        if(true) {
            return false
        }
        else {
            return true
        }     
    }
    else if(valor == typeof(Number)) {
        if(valor > 0) {
            return valor * (-1)
        }
        else {
            return valor * (-1)
        }
    }
    else  {
        return console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof(valor)}`)
    }
}

inverso(5)