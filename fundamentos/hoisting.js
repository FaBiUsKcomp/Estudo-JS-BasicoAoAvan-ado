console.log('a =', a);
var a = 2;
console.log('a =', a); //Percebe que a foi declarada depois da leitura a = 2, pois ela se encontra em estado undefined

console.log('b =', b);
let b = 1;
console.log('b =', b);//Observe que o Hoisting nao ocorre com Let