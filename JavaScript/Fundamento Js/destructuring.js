const pessoa = {
    nome: 'ana', 
    idade: 10, 
    endereco: {
        rua: 'abv', 
        numero: 123
    }
}

console.log(pessoa)
const idade = 11;

pessoa.idade= idade;
console.log(pessoa) // maneira normal de modificar 

// com destruturing 

const { nome: n,  idade: i}= pessoa;

console.log(n , i)


