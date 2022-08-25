const bhaskara = function(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c
    if(delta >= 0) {
        let x1 = (-(b) + (Math.sqrt(delta))) / (2 * a) 
        let x2 = (-(b) - (Math.sqrt(delta))) / (2 * a) 
        return resultado = [x1, x2]
    }
    else {
        return resultado = "Delta é negativo"
    }
}

console.log(bhaskara(1, -2, 4))