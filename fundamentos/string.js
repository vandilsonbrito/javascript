const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio, pois não existe esssa posição 
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('C')) // quando não acha ele retorna -1

console.log(escola.substring(3)) // imprime a partir da posição 3, contendo a 3
console.log(escola.substring(1, 4)) // imprime a partir da posição 1 até a 4, contido a posição 1, porém não a 4

console.log('Escola '.concat(escola) + '!')
console.log(escola.replace(3, 'e'))


console.log('Ana, Maria, Pedro'.split(',')) // cria um array com os nomes sendo separados por vírgula
