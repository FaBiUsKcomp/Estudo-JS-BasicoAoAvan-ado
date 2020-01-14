const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)  //Cria um objeto novo tendo como prototipo o parametro
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { //O segundo parametro é os atributos que serao criados na instancição
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log('--------------------')

for(let key in filha2) { //Imprimindo o Objeto
    //Pertence a ela -> verifica se tal propriedade pertence ao objeto
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por erança: ${key}`)
}