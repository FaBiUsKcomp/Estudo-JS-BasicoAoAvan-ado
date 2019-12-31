let dobro = function (a) {
    return a * 2
}

//Reescrevendo usando a ArrowFunction (EC2015)

dobro = (a) => {
    return a * 2
}

//Arrow ainda mais reduzida

dobro = a => a * 2 //Serve para função de uma única linha (Return é implicito)

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'  //Possui um param

console.log(ola())