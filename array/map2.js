const carrinho = [
'{ "nome": "Borracha", "preco": 3.45 }',
'{ "nome": "Caderno", "preco": 13.90 }',
'{ "nome": "Kit de lápis", "preco": 41.22 }',
'{ "nome": "Caneta", "preco": 7.50 }'
]

// retornar um array com apenas os preços...
    //transformar JSON em um objeto e passar o preço para um array

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)