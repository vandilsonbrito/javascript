// Operador  ... rest(juntar)/spread(espalhar)

// usar spread com objeto 
const funcionrio = { nome: 'Maria', salario: 12365.84 }
const clone = { ativo: true, ...funcionrio }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoB)


