const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })
}
//Observe que as funções vão ter o mesmo valor 
funcs[2]();
funcs[8]();
console.log(funcs);   