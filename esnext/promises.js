function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // O resolve so recebe um parametro. Para tratar a reject(erro) temos que usar um catch
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //Quando agente manda o reject ele funciona como uma exceção