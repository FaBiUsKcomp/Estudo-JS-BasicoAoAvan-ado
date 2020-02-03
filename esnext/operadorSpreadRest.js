//Operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } //Pega todos os atributos de funcionario e espalha aqui
console.log(clone)

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)