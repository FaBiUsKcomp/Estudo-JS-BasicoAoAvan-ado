// Novo recurso introduzido no ES2015

const pessoa = {
    nome: 'Fabio',
    idade: 21,
    endereco: {
        logradouro: 'Latife Simão',
        numero: 12,
        bairro: 'Elias Raimundo',
    }
}

const { nome, idade } = pessoa; //Fazendo a destruturação
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n,i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);