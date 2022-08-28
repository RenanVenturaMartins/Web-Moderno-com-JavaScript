const escola = "d1ab4"; 
console.log(escola.charAt(3));

/* .charAt faz que eu selecione a letra 
ou numero escolhido começando a partir do 0 */

console.log(escola.substring(0 , 3));

console.log("escola ".concat(escola)); 

//ou//
console.log("escola " + (escola));

console.log(escola.replace(4,"a"))
console.log("parede amarela, pare ,d,e, amar ela".split(','))