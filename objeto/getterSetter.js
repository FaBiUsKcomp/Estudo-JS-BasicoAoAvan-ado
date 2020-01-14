const sequencia = {
    _valor: 1, //Convenção, pretendida ser usada apenas internamente
    get valor() { return this._valor++ }, //Palavra reservada
    set valor(valor) { 
        if(valor > this._valor) { 
            this._valor = valor 
        }
    },
}

console.log(sequencia.valor, sequencia.valor) //acessando os getters e setters
sequencia.valor = 1000 //Usando o set
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)