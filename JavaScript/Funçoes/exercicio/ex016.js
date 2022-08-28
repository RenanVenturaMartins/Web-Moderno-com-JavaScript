function calculadora(n1, sinal ,n2) {
    switch (sinal) {
        case'+' : {
            return n1 + n2
        }
        break;
        case'-' : {
            return n1 - n2
        }
        break;
        case'*' :{
            return n1 * n2
        }
        break;
        case'/': {
            return n1 / n2
        }
        break;
        default: {
            console.log('conta invalida')
        }
    }
}

console.log(calculadora(2, '+' ,3))
console.log(calculadora(2, '-' ,3))
console.log(calculadora(2, '*' ,3))
console.log(calculadora(2, '/' ,3))
console.log(calculadora(2, 'df' ,3))