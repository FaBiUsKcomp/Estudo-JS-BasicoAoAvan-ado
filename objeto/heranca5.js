console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Criando nova função que inverte String
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Fabio Junio'.reverse())

//Criando método que retorna primeiro elemento de Array
Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a', 'b', 'c', 'd'].first())

//Substituindo função que já existe na linguagem (PERIGO)
String.prototype.toString = function ()  {
    return 'Lascou Tudo'
}

console.log('Fabio Junio'.reverse())