//Função em JS é First-Class Object (Citizens)
//Higher-Order function

//Criar de Forma Literal
function fun1() {}

//Armazenar em uma variável
const fun2 = function () {} //Função anonima

//Armazenar em um Array
const array = [function (a,b) { return a + b; }, fun1, fun2];
console.log(array[0](2,3));

//Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Opa!' }
console.log(obj.falar());

//Passar função como parametro
function run(fun) {
    fun();
}

run(function () { console.log('Executando...') })

//Uma função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2,3)(4); //Aqui estamos passando um parametro para a função que sera retornada da chamada
//Ou
const cincoMais = soma(2,3)
cincoMais(4);