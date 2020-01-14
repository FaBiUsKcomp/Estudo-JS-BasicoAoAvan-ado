const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro !  -> Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na ultima posição
console.log(pilotos)

pilotos.shift() // Remove um elemento da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição do Array
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar => No indice 2 e não removendo ninguém, serão adicionados
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover => No índice 3 vai remover apenas um elemento
pilotos.splice(3, 1) // Massa quebrou :/
console.log(pilotos)

// Slice -pedaço- => Retorna um novo array a partir do indice passado por parametro
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Pega 1 <= x < 4 (O 4 nao entra)
console.log(algunsPilotos2)