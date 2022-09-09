const removerPropriedade = (objeto, propriedade) => {
    let novoObjeto
    novoObjeto = Object.assign({}, objeto)
    delete novoObjeto[propriedade]
    return console.log(novoObjeto)
}

removerPropriedade({a: 1, b: 2}, "a")


