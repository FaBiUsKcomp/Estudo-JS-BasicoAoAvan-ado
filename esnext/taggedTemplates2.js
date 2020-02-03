function real (partes, ...valores) {
    const resultado = []
    valores.forEach((v, i) => {
        v = isNaN(v) ? v: `R$ ${v.toFixed(2)}`
        resultado.push(partes[i], v)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)