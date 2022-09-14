const { resolve } = require("q")

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try { 
            console.log('temp')
            if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    } catch(e) {
        reject(e)
    }
        
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(
        v => console.log(`Valor: ${v}`),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))
 