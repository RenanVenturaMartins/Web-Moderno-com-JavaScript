const numero = [ 1, 2, 3, 4, 5, 6, 7, 8, 9] 

for (valor in numero) {
    if( valor == 6) {
        break
    }
    console.log(`${numero[valor]}`)

}


for (valor1 in numero) {
    if( valor1 == 6) {
        continue
    }
    console.log(`${numero[valor1]}`)

}