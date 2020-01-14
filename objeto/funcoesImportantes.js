const pessoa = {
    nome: 'Fábio',
    idade: 22,
    peso: 67,
}

console.log(Object.keys(pessoa)) //Acessa os atributos (chaves) do objeto passado
console.log(Object.values(pessoa)) //Acessa os valores dos atributos do objeto passado
console.log(Object.entries(pessoa)) //Retorna uma array com arrays internos chave/valor
Object.entries(pessoa).forEach(([chave, valor]) => { //Usando destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { //Define uma propriedade de um objeto
    enumerable: true, //Sera se ele será exibido
    writable: false,
    value: '01/01/1998'
})

pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento) //Vai funcionar como o 'freeze'
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 } 
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //Pega os parametros que não são os primeiros e cocatenam no primeiro (em ordem)

console.log(obj)
Object.freeze(obj)
obj.c = 1234
console.log(obj)