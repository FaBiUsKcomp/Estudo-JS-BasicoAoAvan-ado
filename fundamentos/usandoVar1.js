{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera); //Observe que var -> tem escopo global

function teste(){ //Observe que quando var é declarado dentro de uma função, ela so é reconhecida na função
    var local = 123;
}

teste();
console.log(local);