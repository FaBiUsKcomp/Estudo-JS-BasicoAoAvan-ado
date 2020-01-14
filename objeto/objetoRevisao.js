//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Fábio',
        idade: 22,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 57
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
//ou
carro['proprietario']['endereco']['logradouro'] = 'Av das Goiabas'
console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //Retorna 'undefined'
//console.log(carro.condutores.length) //Gera erro -> tentando acessar atributo de algo indefinido
