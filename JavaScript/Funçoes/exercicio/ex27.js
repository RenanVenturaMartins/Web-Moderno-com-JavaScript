function crecimento(altura1,taxa1,altura2,taxa2) {
    if (altura1 == altura2) {
        if(taxa1 > taxa2 ) {
            console.log('a criança 1 ultrapasara a outra em 1 ano')
        } else if (taxa1 < taxa2) {
            console.log('a criança 2 ultrapasara a outra em 1 ano')
        } else {
            console.log('elas tem a mesma altura')
        }
    } else if (altura1 > altura2) {
        if (taxa1 >= taxa2) {
            console.log('a criança menor nao ira passar a maior')
        } else if(taxa1 < taxa2) {
            console.log('a criança menor ira passar em ')
        }
    }

   
    
}