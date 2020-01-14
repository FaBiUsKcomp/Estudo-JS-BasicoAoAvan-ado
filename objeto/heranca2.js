// Cadeia de Prototipo (prototype chain)
Object.prototype.attr0 = 'Z' //Não faça isso

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'F' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // Como o filho não possui atributo 1 ele vai procurar na hierarquia

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais (delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //Shadowing -> sombreamento de atributo
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //Ferrai é filho de carro (filho, pai)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(200)
console.log(ferrari.status())