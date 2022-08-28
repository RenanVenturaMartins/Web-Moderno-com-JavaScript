function escola() {
    var nota = 2 ;
    var media = 100;
    if (nota == 99 || nota == 100) {
        console.log(`Aprovado sua nota é ${nota}`)
    } else  if (nota = 98   ) {
        nota = nota + 2
        console.log(`Aprovado sua nota é ${nota}`)
    } else if (nota > 40 || nota < 97 ) {
        console.log(`Você esta na Media sua nota é ${nota}`)
    }
    
}

console.log(escola())

// como era pra ter feito
function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)