Array.prototype.map2 = function (callback) {
    let arrayResult = []
    for(let i = 0; i < this.length; i++) {
        arrayResult.push(callback(this[i], i, this))
    }
    return arrayResult
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.4 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)