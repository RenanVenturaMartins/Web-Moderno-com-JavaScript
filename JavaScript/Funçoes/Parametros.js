function soma () {
    let soma = 0;
    for (i in arguments) {
        soma+= arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1, 5))
console.log(soma(-2 , 5))
console.log(soma(1.1 , 5.6, 2.2))
