function pontuacao(pontos) {
    let array = JSON.parse("[" + pontos + "]");

    let quebraDeRecorde = 0
    let menorPontuacao = array[0]
    let aux = 0

    for (let i = 0; i < array.length; i++) { 
        if(array[i] < array[i + 1]) {
            if(aux < array[i + 1]) {        //o aux se torna uma memória com o valor do recorde até então para que seja possível comparar com os próximos valores com o intuito de que o ex: '0101' não tenha duas quebras de recorde
                quebraDeRecorde++
                aux = array[i + 1] 
            }
            if(menorPontuacao > array[i + 1]) {
                menorPontuacao = array[i + 1]
            }
        }
        if(array[i] > array[i + 1]) {
            if(aux < array[i]) {    
                aux = array[i]
            }
            if(menorPontuacao >= array[i + 1]) {
                menorPontuacao = array[i + 1]
            } 
        }
    }
    for (let i = 0; i < array.length; i++) {
        if(menorPontuacao == array[i]) {
            menorPontuacao = i + 1
        }
    }
    
    return [quebraDeRecorde, menorPontuacao]
}

console.log(pontuacao("10, 2, 20, 100, 250, 3, 1, 300, 0")) 