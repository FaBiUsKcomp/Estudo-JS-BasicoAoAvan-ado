// Factory simples
function criarProduto(nome, preco) { //Factory é uma função que retorna um objeto !
    return {
        nome, //Não precisamos colocar nome: nome
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Mouse Gamer', 200))
console.log(criarProduto('Pc Gamer', 3500.0))