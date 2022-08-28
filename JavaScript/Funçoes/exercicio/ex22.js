/*function salario (janeiro, fervereiro, valor) {
    switch (valor) {
        case 'janeiro' : {
            var valor = valor % 0.5
            return `o seu valor com juros foi ${valor}`
        } break;
        case 'fervereiro' : {
            var valor =
        }
    }
} */

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))