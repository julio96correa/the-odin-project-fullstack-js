const arr = [1, 2, 3, 4, 5];

// Metodos por separado
const arr2 = arr.filter( num => num % 2 == 0)
let arr3 = arr2.map(num => num * 3)
let result = arr3.reduce((mult, current) => mult * current, 1)
console.log(result)

// todos los metodos juntos
let result2 = arr.filter( num => num % 2 == 0).map(num => num * 3).reduce((mult, current) => mult * current, 1) 

console.log("result2 " + result2)