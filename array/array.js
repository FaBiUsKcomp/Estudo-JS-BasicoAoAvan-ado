console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Adiciona na ultima posição do Array
console.log(aprovados.length)

aprovados[9] = 'Rafael' // Funciona e os demais valores ficam vazios (undefined)
console.log(aprovados)
console.log(aprovados[8] === undefined)

aprovados.sort() // Metodo que ordena o Array (Altera o Array original)
console.log(aprovados)

delete aprovados[1] // Coloca undefined na posição do Array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
/** Serve para Adicionar elemento em um determinado indice, 
 * além de remover elementos de um array, e também adicionar
 * e remover ao mesmo tempo.
 * 
 *  params = indice, numero de elementos a partir (exclui todos), 
 *  elementos a serem adicionados
 */
aprovados.splice(1, 1)
console.log(aprovados)
