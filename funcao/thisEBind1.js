const pessoa = {
    saudacao: 'Bom Dia !',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // A função bind server para guardar (Amarrar) o 'this' que queremos acessar
falarDePessoa()