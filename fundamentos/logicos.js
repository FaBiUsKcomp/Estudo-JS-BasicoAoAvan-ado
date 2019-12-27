function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); // XOR -> bitwise
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; //Operador Unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }; //Criação implicita -> nome vai ser o nome da variavel e valor vai ser o valor dela
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));