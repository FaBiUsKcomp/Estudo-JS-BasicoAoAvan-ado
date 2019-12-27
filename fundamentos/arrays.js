const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0] , valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores[4]);

valores[10] = 10; //Os espaços em ente indice 4 e 9 são preenchidos com vazio
console.log(valores);

console.log(valores.length); //Pega n de elementos do array

valores.push({id: 3}, false, null, 'teste'); //Método que adiciona elementos no vetor
console.log(valores);

console.log(valores.pop()); //Pega ultimo valor do vetor
delete valores[0]; //Deleta valores do indice X;
console.log(valores);

console.log(typeof valores);