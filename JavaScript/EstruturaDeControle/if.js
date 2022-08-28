var nota = 8;

function BoaNoticia() {
    if (nota >= 7 ) {
        console.log('parabens, você passou')
    } else if (nota < 7) {
        console.log('tente novamente')
    }
}

console.log(BoaNoticia(nota))


function verdade (valor) {
    if (valor) {
        console.log('É Verdade..' + valor)
    } else {
        console.log('É Mentira...' + valor)
    }
}

verdade('')
verdade(null)
verdade(NaN)
verdade(undefined)
verdade(0)
verdade(-1)
verdade(' ')
verdade('ola ')
verdade('123 ')
verdade('{} ')
verdade('[] ')
