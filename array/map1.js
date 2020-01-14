const nums = [1, 2, 3, 4, 5]

// map(transformar) => é um 'for' com propósito
//Pode receber 3 parametros/ não transforma Array original
let resultado = nums.map(function(e) { // Observe que a callback devera ter um retorno
    return e * 2
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //Substitui '.' por ','

//Chamando map de forma encadeada
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
