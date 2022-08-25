const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // this aponta para pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)