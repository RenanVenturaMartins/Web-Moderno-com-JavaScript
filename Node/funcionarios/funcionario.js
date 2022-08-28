const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const menina = f => f.genero === 'F'
const salario = (atual , novoatual) => {
   return atual.salario < novoatual.salario ? atual : novoatual 
   
}

axios.get(url).then(Response => {
    const funcionarios = Response.data
    console.log(funcionarios)

    const funcionario = funcionarios
        .filter(chineses)
        .filter(menina)
        .reduce(salario)

        console.log(funcionario)
    
})

