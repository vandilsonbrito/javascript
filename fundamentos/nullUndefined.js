let valor
console.log(valor) // variável valor não inicializada 

valor = null // ausência de valor
console.log(valor)
// console.log(valor.ToString()) // ERRO! 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined   // Evite atribuir undefined 
console.log(!! produto.preco)

produto.preco = null  // sem preço
console.log(!! produto.preco)
console.log(produto)