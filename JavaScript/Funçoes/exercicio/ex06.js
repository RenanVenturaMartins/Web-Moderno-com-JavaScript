function capital(capitalinicial, taxa , tempo) {
    return capitalinicial + (capitalinicial * taxa * tempo)
}

console.log(capital(2,2,2))
function capitalcomposto(capitaljuro , taxa , tempo) {
    return capitaljuro * (taxa + 1) * tempo
}

console.log(capitalcomposto(2,2,2))