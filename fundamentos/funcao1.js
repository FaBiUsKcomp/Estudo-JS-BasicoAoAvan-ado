//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma();

//Mais parametos ou menos
imprimirSoma(2); //Segundo parametro é indefinifo -> Vai retornar NaN
imprimirSoma(2,3,4,5,6,7); //Vai pegar só os dois primeiros e ignorar o resto.

//função com retorno
function retornaSoma(a, b = 0){ //b tem valor default = 0
    return a + b;
}

console.log(retornaSoma(3,3));
console.log(retornaSoma(2));