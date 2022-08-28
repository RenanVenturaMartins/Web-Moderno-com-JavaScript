const nome = 'Luan';
const concatenacao = 'Ola ' + nome + "!" ; 

console.log(concatenacao)

const template = ` ola ${nome} !` ; 

console.log(template); 

//expressoes...

console.log(`1 + 3 = ${1 + 30}  CONFIA!`); 

const up =  text => text.toUpperCase() ; 

console.log (`Ei ${nome}... ${up('cuidadooo!')}`)
