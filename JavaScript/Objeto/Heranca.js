// cadeia de prototype
Object.prototype.attr0 = 'kkk';
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2 :'B', attr3: 'D'}
const filho = {__proto__: pai, attr3 : 'C'}

console.log(filho.attr3)
console.log(pai.attr3)
console.log(avo.attr2)