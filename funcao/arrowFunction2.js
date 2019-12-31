function pessoa () {
    this.idade = 0

    /*Aqui podemos ver que diferente de 'thisEBind2' a arrowFunction nao varia o this.
      Como sabemos o this da Arrow é definido junto com o contexto lexico, portanto,
      não varia
    */

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa