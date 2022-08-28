function valor(nota) {
    if ( nota >= 9 ) {
        console.log(' Foi embora dentro do quadro de honra')
    } else if (nota >= 6 && nota <= 8 )  {
        console.log('Passou na media')
    } else  {
        console.log('Parece que a escola gosta tanto de você que vai ficar mais 1 ano conosco')
    }
}

valor(10); 
valor(8)
valor(5)