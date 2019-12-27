function rand([ min = 0, max = 1000 ]) {
    if(min > max) [min, max] = [max, min]; //Inverte os valores maximo e minimo
    const valor = Math.random() * (max - min) + min; 
    return Math.floor(valor);
}

console.log(rand( [50, 40] ));
console.log(rand( [992] ));
console.log(rand( [, 10] ));
console.log(rand( [] ));
console.log(rand()) //Gera erro pq esta dentando desestruturar algo null ou undefined