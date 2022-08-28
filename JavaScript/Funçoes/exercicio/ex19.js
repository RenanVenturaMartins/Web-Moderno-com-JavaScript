function cardapio(codigo,quantia) {
    switch (codigo) {
        case 100 : {
        
            console.log( 'R$' + 3 * quantia)
            return 'cachorro quente'
        }
        break;
        case 200 : {
            console.log( 'R$' + 4 * quantia)
            return 'hambuguer simples'
            
        }
        break;
        case 300 : {
            console.log('R$' + 5.50 * quantia)
            return 'cheesebuguer'
        }
        break;
        case 400  : {
            console.log( 'R$' +7.50 * quantia)
            return 'bauru'
            
        }
        break;
        case 500 : {
            console.log( 'R$' +3.50 * quantia)
            return 'refrigerante'
            
        }
        break;
        case 600 : {
            console.log( 'R$' +2.50 * quantia)
            return 'suco'
            
        }
        break;
        default: {
            return 'codigo invalido'
        }
    }
}
console.log(cardapio(100 , 2))
console.log(cardapio(200 , 2))
console.log(cardapio(300 , 2))
console.log(cardapio(400 , 2))
console.log(cardapio(500 , 2))
console.log(cardapio(600 , 2))