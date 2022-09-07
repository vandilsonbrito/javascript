const maiorOuIgual = (primeiroNum, segundoNum) => {
    if(primeiroNum > segundoNum){ 
        return true
    }
    else if(primeiroNum === segundoNum){
        return true
    }
    else {
        return false
    }
}

console.log(maiorOuIgual(0,"0"))