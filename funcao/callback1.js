const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //Funciona como uma estrutura Foreach
fabricantes.forEach(fabricante => console.log(fabricante))//Esse parametro(funcao) é cada elemento do Array