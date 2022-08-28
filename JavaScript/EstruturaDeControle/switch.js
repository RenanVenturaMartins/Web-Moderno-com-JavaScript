var  nota = 8;

const boletim = function (nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('quadro de honra');
            break
        case 8:
        case 7:
        case 6:
        case 5:
            console.log('esta na media');
            break
        case 4:
        case 3:
        case 2:
        case 1:
            console.log('reprovado');
            break
        default:
            console.log('nota invalida')
        
    }
    }
    console.log(boletim(nota));
    boletim(7)
    boletim(-1)
    