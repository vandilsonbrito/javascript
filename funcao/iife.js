// Invoked -> Immediately Invoked Function Expression. 
// É uma função que é invocada imediatamente, ou seja, ela é lida e  executada imediatamente após e ajuda a fugir do escopo global.

(function() {
    console.log("Será executado na hora!")
    console.log('Foge do escopo mais abrangente!')
})

console.log("Será executado na hora!")
console.log('Foge do escopo mais abrangente!')

// Os dois códigos se esquivalem, mas a IIFE tem escopo local.