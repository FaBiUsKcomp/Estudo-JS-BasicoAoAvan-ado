// Factory simples
function criarPessoa() { //Factory é uma função que retorna um objeto !
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())