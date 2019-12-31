console.log(soma(3, 4)) // Observeque a 'function declaration' é declarada antes do código começar a executar
//console.log(sub(3, 4)) // a function expression e a named não é carregada no inicio da execução
//console.log(mult(3, 4))

//function declaration
function soma (x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression
const mult = function mult (x, y) {
    return x * y
}