console.log('01)', '1' == 1); //Comparando somente valor -> true
console.log('02)', '1' === 1) //Comparando valor e tipo -> false (estritamente igual)
console.log('03)', '3' != 3); //Comparando somente valor -> true
console.log('04)', '3' !== 3); //Comparando valor e tipo -> false (estritamente diferente)

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 7 <= 2);
console.log('08)', 2 >= 7);

const day1 = new Date(0); //Data referencia 01/01/1970
const day2 = new Date(0);
console.log('09)', day1 === day2);
console.log('10)', day1 == day2);   
console.log('11)', day1.getTime() === day2.getTime());
console.log('12)', undefined == null);
console.log('13)', undefined === null);