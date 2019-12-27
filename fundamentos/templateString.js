const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
  Olá
  ${nome}!` //Substitui no local dos colchetes -> Considera a quebra de linha

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); //Funcão que substitui letras para maiúsculas

console.log(`Ei... ${up('cuidado')} !`) //Chamando função dentro do template String