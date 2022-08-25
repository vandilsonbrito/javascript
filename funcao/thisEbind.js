function Pessoa() {
    this.idade = 0

    const self = this;            // Posso nesse caso, ao invés de usar o bind, usar uma const para igualar o this e driblar o que o método this tem intrinsecamente.
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000);
}

new Pessoa 