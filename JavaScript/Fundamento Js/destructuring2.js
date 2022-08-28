//criei uma função com um valor minimo e outro max
function rand ([min = 0, max =  1000]) {
    if (min > max ) [ max,  min] = [min , max] //aqui eu falei que se o valor minimo for maior que o valor max eles troquem de valres 
    const valor =  Math.random() * (max - min) + min //adicionei uma constante  colocando o random para vir um  numero dentro do valor escolhido
    return Math.floor (valor) // coloquie o math floor, para que nao venha numero quebrado
}

    console.log(rand([ 10, 400])) // chamei a funcao e log em seguida adicionei () e dentro coloquei [] para informa o valor
   