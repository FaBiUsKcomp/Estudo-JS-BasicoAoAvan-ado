// par Nome/Valor
const saudacao = 'Opa'; //Contexto Lexico 1

function exec() {
    const saudacao = 'Falaa'; //Contexto Lexico 2
    return saudacao;
}

//Objetos são grupos aninhados de chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123,
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);