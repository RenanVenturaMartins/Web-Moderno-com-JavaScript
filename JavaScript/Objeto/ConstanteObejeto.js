// pessoa -> 123 -> {...}

const pessoa = {
    nome: 'paulo'
}
pessoa.nome = 'andré'

console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'maria'}

Object.freeze(pessoa)
pessoa.nome = 'pedrin'
console.log(pessoa)

