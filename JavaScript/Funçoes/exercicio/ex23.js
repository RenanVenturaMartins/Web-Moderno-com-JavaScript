function boletim(nota1,nota2,nota3) {
    var media =( nota1 + nota2 + nota3) / 3;
    if (media >= 5) {
        console.log(`aprovado com ${media} `) 
    } else{
        console.log(`KKKK reprovado com ${media}`)
    }
        
}

console.log(boletim(10,10,10))
console.log(boletim(5,4,6))
console.log(boletim(3,2,7))
