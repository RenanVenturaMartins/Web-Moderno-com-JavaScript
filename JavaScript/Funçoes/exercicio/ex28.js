/*function vetor( circuito) {
    let par = 0;
    let impa = 0;

    for(let r = 0; r < circuito; r++) {
    if(circuito[r] % 2 == 0) {
        par++
    } else {
        impa++
    }
    console.log(` os numeros par ${par} e os impas ${impa}`)
}
} 

ordem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(vetor(ordem))*/ 



function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)