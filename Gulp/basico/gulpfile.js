const gulp = require('gulp')
const {series, parallel}= require('gulp')



const comeco = cb => {
    console.log('inicio')
    return cb()
}

const  QuaseMeio = cb => {
    console.log('perto do meio')
    return cb()
}

const Fim = cb => {
    console.log('fim m m :3')
     return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt' , 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest( 'PastaB'))
    return cb()
}

module.exports.default = series(
   parallel(comeco,QuaseMeio),
    copiar,
    Fim,
)