 function ano(anos) {

     if (anos == 4) {
         return 'true'
     } else if (anos >= 5 && anos <= 399) {
         return 'false'
     } else if (anos == 400) {
         return 'true'
     }
 }

 console.log(ano(399))
 console.log(ano(30))
 console.log(ano(40))
 console.log(ano(4))
 console.log(ano(400))

 // como ele fez 

 function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))