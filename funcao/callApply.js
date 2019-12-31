function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro)) //Essa função passa o objeto que será refenciado por parametro para a função chamada
console.log(getPreco.apply(carro)) //Funciona igual call()

// A difença entre as duas está em

//O primeiro é o contexto, e os outros são os parametros da funcção chamada
console.log(getPreco.call(carro, 0.17, '$')) //Passa os parametros que serão passados para a função chamada

//Funciona igual o call, porem os paramentros da funcao chamada deverão ser chamadas através de um array
console.log(getPreco.apply(carro, [0.17, '$']))