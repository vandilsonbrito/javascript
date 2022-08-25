const valores = [0.58, 4.78, 6, 1.5]
console.log(valores[0], valores[3])
console.log(valores[4])

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // array em JS é heterogêneo
console.log(valores)

console.log(typeof valores)