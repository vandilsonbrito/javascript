const notasNecessarias = (notas) => {

    let nota100 = Math.trunc(notas / 100)  
    if(nota100 > 0){
        console.log(nota100 + " nota(s) de R$ 100")
    }
    let nota50 = Math.trunc((notas % 100) / 50)
    if(nota50 > 0){
        console.log(nota50 + " nota(s) de R$ 50")
    }
    let nota10 = Math.trunc(((notas % 100) % 50) / 10)
    if(nota10 > 0){
        console.log(nota10 + " nota(s) de R$ 10")
    }
    let nota5 = Math.trunc((((notas % 100) % 50) % 10) / 5)
    if(nota5 > 0){
        console.log(nota5 + " nota(s) de R$ 5")
    }
    let nota1 = Math.trunc(((((notas % 100) % 50) % 10) % 5) / 1)
    if(nota1 > 0){
        console.log(nota1 + " nota(s) de R$ 1")
    }


    }



notasNecessarias(166)