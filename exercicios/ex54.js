objeto1 = {
    nome: "Maria",
    sobrenome: "Fontana",
    profissao: "Software Engenieer"
}
objeto2 = {
    codigo: 1558987,
    preco: 4.98
}

const objetoParaArray = (objeto) => {
    let array = Object.keys(objeto).map(function(key){
        return [key, objeto[key]]
    })
    return array
}

console.log(objetoParaArray(objeto1))

// outra solução

function objetoParaArray2(objeto) {
    return Object.entries(objeto)
} 

console.log(objetoParaArray2(objeto2))