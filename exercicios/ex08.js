function pontuacao(pontos) {
    let array = JSON.parse("[" + pontos + "]");

    let quebraDeRecorde = 0
    let menorPontuacao = array[0]
    let numerosTemporada = []
    let aux = 0
    let aux2 = array[0]
    for (let i = 0; i < array.length; i++) {  // "400, 50, 20, 8, 25, 300, 100, 3, 300"
        
        if(array[i] < array[i + 1]) {
            console.log("IF ACIMA (i): " + i)
            console.log("MPontuação : " + menorPontuacao)
            if(aux < array[i + 1]) {        //o aux se torna uma memória com o valor do recorde até então para que seja possível comparar com os próximos valores com o intuito de que o ex: '0101' não tenha duas quebras de recorde
                quebraDeRecorde++
                aux = array[i + 1] 
            }
            if(menorPontuacao > array[i + 1]) {
                menorPontuacao = array[i + 1]
                console.log("MPontuação : " + menorPontuacao)
            }
            else if(menorPontuacao > array[i + 1]) {

            }                                                         //"400, 50, 20, 8, 25, 300, 100, 3, 300"
        }
        if(array[i] > array[i + 1]) {
            console.log("IF ABAIXO (i): " + i)
            if(aux < array[i]) {    
                aux = array[i]
            }
            if(menorPontuacao >= array[i + 1]) {
                console.log("pontuação : " + array[i])
                menorPontuacao = array[i + 1]
                console.log("menorPontuação : " + menorPontuacao)
            } 
            console.log("menorPontuação : " + menorPontuacao)
        }
    }
    
    numerosTemporada.push(quebraDeRecorde, menorPontuacao)
    return numerosTemporada
}

console.log(pontuacao("10, 20, 20, 10, 25, 3, 2, 30, 25")) //"10, 20, 20, 8, 25, 3, 0, 30, 1"