const fs = require('fs')

const produto = {
    nome: 'motorola',
    preco: 1459.45,
    desconto: 0.15

}

fs.writeFileFile(__dirname + '/arquivoGerador.json' ,  JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})