// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2,3))
 
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro Default
function log(texto = 'Node') {
    console.log(texto)
}
log(null)

// Operador Rest 
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total 
}
console.log(total(2,3,4,5)) // passou os números espalhados e o operador rest juntou em um array 

