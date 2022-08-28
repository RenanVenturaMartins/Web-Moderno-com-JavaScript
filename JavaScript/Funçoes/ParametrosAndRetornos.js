function area (largura , altura) {
    const resultado = largura * altura
    if ( resultado > 20) {
        console.log(`Ìmpossivel...Valor acima do limite ${resultado}m2.`)
    } else {
        return  resultado
    }
}

console.log(area(2, 2))
console.log(area(10, 3))