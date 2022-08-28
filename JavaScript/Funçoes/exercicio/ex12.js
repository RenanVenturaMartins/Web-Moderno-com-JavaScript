function algoritmo(numero) {
    if ( numero == 0 ) {
        return '1'
    } else {
        return numero * algoritmo(numero - 1)
}
}

console.log(algoritmo(90))