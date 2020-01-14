// Object.preventExtensions
const produto = Object.preventExtensions({ //Torna o Objeto não extensível (nao permite a adição de novos atributos)
    nome: 'Qualquer', preco: 1.99, tag:'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) // Teste se o objeto é extensível

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) 

// Object.seal (selar)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // Nao permite a adição, exclusão. Somente alterar atributos (valores)
console.log('Selado:', Object.isSealed(pessoa)) //Verifica se o Objeto está selado

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

//Object.freeze = selado + valores constantes
