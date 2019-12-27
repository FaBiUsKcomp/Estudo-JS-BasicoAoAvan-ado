var numero = 1;
{
    let numero = 2;
    console.log('Dentro = ',numero); //Observe que let tempo escopo somente no bloco
}

console.log('Fora = ', numero);