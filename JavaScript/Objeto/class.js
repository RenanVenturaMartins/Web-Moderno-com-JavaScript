class avo  {
   constructor(nome = 'thalles', sobrenome) {
    this.nome = nome
    this.sobrenome= sobrenome
   }
}


class pai  extends avo{
    constructor(  sobrenome, profissao = 'advogado') {
        super(sobrenome)
        this.profissao = profissao
    }
    }

    class filho extends pai {
        constructor() {
            super('araujo')
        }
        
    }

    const filho1= new filho
    const pai1 = new pai

    console.log(filho1)


   