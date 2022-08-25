const bissexto = (ano) => {
    if((ano % 400) == 0){
        console.log("Ano bissexto!")
    }
    else if((ano % 4) == 0 && (ano % 100 !== 0)){
        console.log("Ano bissexto!")
    } 
    else {
        console.log("Não é bissexto!")
    }
 }
 bissexto(1200)