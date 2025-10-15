//createMultiplier is a higher-order function because it returns a new function 

//common built-in higher order functions in javascript
//Array methods, Event handlers, timing function
function createMultiplier(factor) {
    return function (num) {
        return num * factor
    }
}


const multiplyByTwo = createMultiplier(2)
const multiplyByThree = createMultiplier(3)

console.log(multiplyByTwo(10))
console.log(multiplyByThree(40))

//