const a = 1
const b = 1
const c = 1

const obj1 = {a: a , b: b, c: c}
const obj2 = {a , b , c}

console.log(obj1 , obj2) 

const nomedoatributo = 'valor'
const precodoatributo = 123

const obj3= {}
obj3[nomedoatributo] = precodoatributo
console.log(obj3)

const obj4 = {[nomedoatributo] : precodoatributo}
console.log(obj4)