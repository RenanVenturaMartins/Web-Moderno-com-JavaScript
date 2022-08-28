class pessoa {
    constructor (nome) {
        this.nome = nome 
    }

    fala() {
        console.log(`Ola. Meu nome é ${this.nome}`)
    }
}

let pi = new pessoa('Ruan'); 
pi.fala()
 
pi = new pessoa ('Anderson')
