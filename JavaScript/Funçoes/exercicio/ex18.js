function contagem(valor) {
    switch(valor) {
        case 0: {
            return 'zero'
        }
        break;
        case 1: {
            return 'um'
        }
        break;
        case 2: {
            return 'dois'
        }
        break;
        case 3: {
            return 'tres'
        }
        break;
        case 4: {
            return 'quatro'
        }
        break;
        case 5: {
            return 'cinco'
        }
        break;
        case 6: {
            return 'seis'
        }
        break;
        case 7: {
            return 'sete'
        }
        break;
        case 8: {
            return 'oito'
        }
        break;
        case 9: {
            return 'nove'
        }
        break;
        case 10: {
            return 'dez'
        }
        break;
        default: {
            return 'numero invalido'
        }
    }
}

console.log(contagem(0))
console.log(contagem(1))
console.log(contagem(2))
console.log(contagem(3))
console.log(contagem(4))
console.log(contagem(5))
console.log(contagem(6))
console.log(contagem(7))
console.log(contagem(8))
console.log(contagem(9))
console.log(contagem(10))
console.log(contagem(11))