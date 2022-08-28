const pessoa = {
    saudaçao: 'Bom dia' ,
        fala () {
            console.log(this.saudaçao)
        } 

}

console.log(pessoa.fala())

const faladepessoa = pessoa.fala.bind(pessoa)

faladepessoa()

