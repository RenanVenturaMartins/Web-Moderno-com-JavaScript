const soma = function ( a , b ) {
    return a + b
}


const imprimirSoma = function (x , y,  operacao = soma) {
    console.log(operacao( x , y))
}

imprimirSoma(2, 3) // função anonima utilizando parametros simples

imprimirSoma(5 , 6, function (x , y ) {
    return x - y
}) //chamando a função e ja incrementando a ela uma nova função

imprimirSoma(5,6, (x , y) => x * y) // utilizando Arrow para criar a função anonima

const Renan = {
    fala: function () {
        console.log('eae Felipe')
    }
}

Renan.fala()
const fala = 'ola'
Renan.fala = fala
console.log(Renan)
