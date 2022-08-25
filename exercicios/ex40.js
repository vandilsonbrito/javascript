const conceitoParaNota = (array) => {
    let conceitos = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 0.0 && array[i] <= 4.9) {
            conceitos[i] = "D"
        }
        else if(array[i] >= 5.0 && array[i] <= 6.9) {
            conceitos[i] = "C"
        }
        else if(array[i] >= 7.0 && array[i] <= 8.9) {
            conceitos[i] = "B"
        }
        else if(array[i] >= 9.0 && array[i] <= 10) {
            conceitos[i] = "A"
        }
    }
    for(let i = 0; i < array.length; i++) {
        console.log(conceitos[i])
    }
    
}

conceitoParaNota([2.3, 5.7, 8.1, 9.4])