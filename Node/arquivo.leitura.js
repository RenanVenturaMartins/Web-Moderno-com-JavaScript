const fs = require('fs')

const caminho = __dirname + '/arquivo.json'


// caminho sicrono

const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)


