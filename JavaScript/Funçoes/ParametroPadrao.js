
 // valor Padrão 1
function soma1(a, b , c) {
    a = a || 10;
    b = b || 10;
    c = c || 10;

    return a + b + c;
}

console.log(soma1())
console.log(soma1(1,2,3))
console.log(soma1(-5,5,10))
console.log(soma1(1))

// formar de gerar valor 2 , 3 e 4

function soma2 (a, b , c) {
    a = a== undefined ? a: 1
    b = b  in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a +b+ c
}


console.log(soma2())
console.log(soma2(1,2,3))
console.log(soma2(-5,5,10))
console.log(soma2(1))


// valor Padrão do ECman2022 

function soma (a = 1, b = 1, c = 1) {
    return a +b +c;
}

console.log (soma())
console.log (soma(0, 0, 0))