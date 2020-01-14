// JSON (JavaScript Object Notation) vs Objetos

// Json carrega somente dados (Sem funções e etc)

const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c } }
console.log(JSON.stringify(obj)) // Esse método converte o Objeto para JSON

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // => Atributos tem que ficar entre ""
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // => Observe que somente string e atributos presisam estar em aspas dupas
