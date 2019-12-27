function rand({ min = 0, max = 1000 }) { //Através de um objeto passado por parâmetro, a destruturação é feita somente nos atributos do parametro.
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({min: 50, max: 60}));
console.log(rand({ min: 955 }));
console.log(rand({  }));   