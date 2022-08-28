function roleta (min = 0, max = 1000) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
     return Math.floor(valor)
}

let giro = 0

  do {
    giro = roleta(-10 , 100)
    console.log(`o seu numero foi ${giro}`)
}while (giro != -1)

