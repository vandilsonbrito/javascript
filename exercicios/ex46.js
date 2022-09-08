const inverso = (valor) => {
    if(typeof valor == "boolean"){
        if("true") {
            return console.log(false)
        }
        else {
            return console.log(true)
        }
    }
    else if(typeof valor == "number") {
        return console.log(valor * (-1)) 
    }
    else  {
        return console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof(valor)}`)
    }
}
 
inverso("nn")

