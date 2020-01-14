//pessoa -> 123 -> {...} -> Observamos que o indereço de memoria continua o mesmo
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}  ---> Como o objeto é constante, ele vai dar erro
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //Congela o objeto -> ele fica inalterado (O objeto fica constante)
pessoa.nome = 'Maria' // O nome continua 'Pedro' e não vai mais criar atributos
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)