const valor = [7.1 , 2.6 , 5.9] ;
console.log(valor[0]);
console.log(valor[1]);
console.log(valor[2]);
console.log(valor[3]);

valor[3] = 5;
console.log(valor);

valor.push(false, true, null, 'ola');
console.log(valor);

delete valor[0]
console.log(valor)