//Armazenando função em variável

const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2,3);

//Armazenando um função arrow em uma variável
const soma = (a,b) => {
    return a + b;
}

console.log(soma(2,3));

//Retorno implícito
const subtracao = (a, b) => a - b; //Esse tipo executa apenas uma sentença de código

console.log(subtracao(2,3));

const imprimir2 = a => console.log(a);

imprimir2('Legal...');