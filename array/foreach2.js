Array.prototype.forEach2 = function (callback) { // Implementando um forEach por baixo dos panos
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}  

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice, array) { //Passa valor e indice e o proprio array
    console.log(`${indice + 1}) ${nome}`)
})
