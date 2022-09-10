function despesasTotais(despesas) {
    let soma = despesas.reduce((soma, elemento) => soma + elemento.preco, 0)
    return soma
     
}

const despesas = [
    {nome: "Jornal online", categoria: "Informação", preco: "89.99"},
    {nome: "Cinema", categoria: "Entretenimento", preco: "149.89"},
    {nome: "Iphone 14", categoria: "Eltrônicos", preco: "10969.99"}
]

console.log(despesasTotais(despesas))
