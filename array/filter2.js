Array.prototype.filter2 = function (callback) {
    const arrayResult = []
    for(let i = 0;i < this.length; i++) {
        if(callback(this[i], i, this)) {
            arrayResult.push(this[i])
        }
    }
    return arrayResult
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) { // A função callback deverá retornar verdadeiro ou falso
    return false
}))

const eCaro = produto => produto.preco >= 500
const eFragil = produto => produto.fragil

//Essa função verifica se o produto é caro e fragil
const resultado = produtos.filter2(eFragil).filter2(eCaro)
console.log(resultado)