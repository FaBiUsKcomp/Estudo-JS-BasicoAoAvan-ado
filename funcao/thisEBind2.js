function pessoa () {
    this.idade = 0

    const self = this

    setInterval(function() { //Função que funciona baseada em um intervalo (milisegundos)
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa