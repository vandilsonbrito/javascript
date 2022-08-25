const cardapio = (codigo, quantidade) => {
    switch(codigo) {
        case 100:
            console.log("Cachorro Quente - valor total R$" + (3 * quantidade).toFixed(2))
            break
        case 200:
            console.log("Hambúrguer Simples - valor total R$" + (4 * quantidade).toFixed(2))
            break    
        case 300:
            console.log("Cheeseburguer - valor total R$" + (5.5 * quantidade).toFixed(2))
            break  
        case 400:
            console.log("Bauru - valor total R$" + (7.5 * quantidade).toFixed(2))
                break 
        case 500:
            console.log("Refrigerante - valor total R$" + (3.5 * quantidade).toFixed(2))
            break 
        case 600:
            console.log("Suco - valor total R$" + (2.8 * quantidade).toFixed(2))
            break 
        default:
            console.log("Produto não existente!")
            break 
                      
    }
}

cardapio(600, 2)