let valor;
console.log(valor); //Sem inicialização

valor = null;
console.log(valor); //Ausencia de valor
//console.log(valor.toString())  //Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //Evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null; //Sem preço
console.log(!!produto.preco)
console.log(produto)