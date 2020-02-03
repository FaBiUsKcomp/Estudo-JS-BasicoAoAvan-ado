// Não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //Não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('Palmeiras'))
times.delete('Corinthians')
console.log(times.has('Corinthians'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)