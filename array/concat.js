const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxinton',  'Uesclei']

// O metodo 'concat' cocatena "coisas" de arrays (Arrays originais não sofrem alteração)
// Chama em um dos arrays e cocatena com o parametro
const todos = filhas.concat(filhos)
console.log(todos, filhos, filhas)

// Da para cocatenar com quantos params quiser
console.log([].concat([1,2], [3,4], 5, [[6,7]]))