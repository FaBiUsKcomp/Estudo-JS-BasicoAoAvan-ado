Array.prototype.map2 = function (callback) {
    let arrayResult = []
    for(let i = 0; i < this.length; i++) {
        arrayResult.push(callback(this[i], i, this))
    }
    return arrayResult
}

//Função que transforma JSON em Obj
function parseToObjAndValue (nome, indice, array) {
    let obj = JSON.parse(nome)
    return obj.preco
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.4 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Desafio => Retonar um array apenas com os preços
const result = carrinho.map2(parseToObjAndValue)
console.log(result)
