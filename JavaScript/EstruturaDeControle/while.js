function roleta (min = -100, max = 1000) {
    if (min > max) [min , max] = [max , min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let  giro = 0;

while (giro != -10) {
    giro = roleta (-10, 10)
    console.log(` o resultado foi ${giro}`)
}