function convenio(idade, valor) {
     if( idade < 10) {
        var valor = 'R$' + 180
        console.log(`o seu plano custa ${valor}`)
     } else if(  idade < 30) {
        var valor = 'R$' + 150
        console.log(`o seu plano custa ${valor}`)
     } else if (idade < 60) {
        var valor = 'R$' + 195
        console.log(`o seu plano custa ${valor}`)
     } else  if (idade >= 60 ){
        var valor = 'R$' + 230
        console.log(`o seu plano custa ${valor}`)
     }      
}

console.log(convenio(9))
console.log(convenio(12))
console.log(convenio(29))
console.log(convenio(30))
console.log(convenio(60))