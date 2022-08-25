const stringIguais = (string1, string2) => {
    let estaContido
    
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    for(let i = 0; i < string1.length; i++){
        for(let j = 0; j < string2.length; j++) {
            if(string1[i] == string2[j]) {
                estaContido = true
                break
            }
            else {
                estaContido = false
            }   
        }
    }
    return estaContido
    
}

console.log(stringIguais("AMOR", "amoedar"))
