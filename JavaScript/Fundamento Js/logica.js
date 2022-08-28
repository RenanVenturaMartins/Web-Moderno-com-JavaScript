

 /*function compra (trabalho1 ,  trabalho2) {
    if (trabalho1 = true  trabalho2 = true)  {
        console.log('parabenss')
    } else if (trabalho1 =  false  || trabalho2 = false) {
        console.log('sinto muito ')
    }
    
} */ //como eu pensei que eu iria correto


function compra (trabalho1 , trabalho2) {
    const soverte =  trabalho1 || trabalho2 ;
    const tv50 = trabalho1 && trabalho2 ;
    const tv30 = trabalho1 != trabalho2; 
    const saudavel = !soverte; 

    return {soverte, tv50 , tv30, saudavel}
}

console.log(compra(true , false))