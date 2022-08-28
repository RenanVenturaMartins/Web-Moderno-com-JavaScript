// armazenando funcao em uma variavel 

const Soma = function (a  = 6,b = 5) {
    console.log(a + b) 
}; 

Soma(4,8); 

// armazenando funcao arrow em  variavel
const soma1 = (a ,b) => {
    return a + b 
}; 

console.log(soma1(2 , 3)) ; 

// retorno implicito 

const divisao = (a , b) => a / b ;
console.log(divisao(4, 2));