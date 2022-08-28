function criaobj(nome = '???' ,preco = '???') {
    return {
        nome,
        preco,
        desconto : 0.1,
        vedendor : (`ola estou vedendo o ${nome} por apenas R$ ${preco}`)
    }
}

console.log(criaobj('paulo' , 123))
console.log(criaobj())

