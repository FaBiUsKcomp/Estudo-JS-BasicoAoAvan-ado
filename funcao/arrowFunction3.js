let comparaComThis = function (param) {
    console.log(this === param)
} 

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) //Observe que o this da função Arrow continua sendo o module.exports, e não varia
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)