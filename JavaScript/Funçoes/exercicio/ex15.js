function vendas(carro) {
    switch (carro) {
        case'hatch' : {
            console.log('Compra efetuada com sucesso')
        }
        break;
        case'sedans':
        case'motocicletas' :
        case 'caminhonetes': {
            console.log('“Tem certeza que não prefere este modelo?')
        }
        break;
        default: {
            console.log('não trabalhamos com esse modelo')
        }
    }
}



console.log(vendas ('123'))
console.log(vendas ('sedans'))
console.log(vendas ('hatch'))
console.log(vendas ('teslas'))