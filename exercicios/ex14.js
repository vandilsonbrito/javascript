const frutas = (fruta) => {
    switch(fruta) {
        case 'maçã':
            console.log("Não vendemos esta fruta aqui")
            break
        case 'kiwi':
            console.log("Não vendemos esta fruta aquiEstamos com escassez de kiwis")
            break
        case 'melancia':
            console.log("Aqui está, são 3 reais o quilo")
            break
        default:
            console.log("Erro")
    }
}

frutas("morango")