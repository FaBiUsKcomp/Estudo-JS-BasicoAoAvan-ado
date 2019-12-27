const faculdade = "UFLA";

console.log(faculdade.charAt(3)); //Da a letra da posição 3 da string
console.log(faculdade.charAt(10)); //Retorna um valor vazio quando a posição é maior que o tamanho
console.log(faculdade.charCodeAt(1)); //Paga o valor da tabela ASII
console.log(faculdade.indexOf('L')); //Retorna a posisão do parametro (-1 caso não exista)

console.log(faculdade.substring(1)) //Retorna a substring a partir do parametro
console.log(faculdade.substring(0, 3)); //Retorna a subtr no intervalo de 0 a 3 sem incluir o char do indice 3 (<)
console.log("Minas Gerais".concat( faculdade).concat("!")); //Cocatena todo conteudo
console.log(faculdade.replace('F', 'L')); //Faz uma troca entre o primeiro paramentro e o segundo presente no conteudo
console.log('Fabio,Jhessy,Sandra,Juliano,Sandy'.split(',')); //Cria um array em que cada indice esta uma palavra