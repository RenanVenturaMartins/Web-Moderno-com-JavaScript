function plano(   orcamento,salario) {
    switch (orcamento) {
        case'A' :{
            return (salario * 1.10).toFixed(2)
        }
        break;
        case'B' : {
            return (salario * 1.15).toFixed(2)
        }
        break;
        case'C'  : {
            return (salario * 1.20).toFixed(2)
        }
        break;
        default:{
            return 'plano indisponivel'
        }
    }
}

console.log(plano( 'A' , 200))
console.log(plano('B' , 200))
console.log(plano('C', 200))
console.log(plano('K', 200))

