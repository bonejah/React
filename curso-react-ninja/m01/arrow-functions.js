'use strict'

console.log('Arrow functions:')

// Example function
var sum = function (x, y) {
  return x + y
}

console.log(sum(1, sum(2, sum(3, 4))))

// Example 1 - arrow function 
var sum2 = (x, y) => {
  return x + y
}
console.log(sum2(1, sum2(2, sum2(3, 4))))

// Example 2 - arrow function 
var sum3 = (x, y) => x + y
console.log(sum3(1, sum3(2, sum3(3, 4))))

// Example 3 - arrow function 
var add1 = x => sum(x, 1)
console.log(add1(6))