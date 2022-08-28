function pessoa() {
    this.idade = 0;

     var update = this
     setInterval (() => {
         update.idade++
         console.log(this.idade)
     }, 1000)
}

new pessoa
