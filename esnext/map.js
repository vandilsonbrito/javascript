// Map é outra estrutura chave e valor (além do Objeto) que aceita a chave como sendo um número, array, objeto...

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'], 
    [{}, 'Objeto'], 
    [123, 'Número'], 

])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')  // não aceita repetição de chaves
chavesVariadas.set(456, 'b') 
console.log(chavesVariadas) 

