//one such technique to working smarter with javascript is using high order function

//hof takes one or more functions as arguement or return function as their result

//different types of hof like map and reduce

function callbackfunction() {
    console.log("I am a callback function")
}

function higherOrderFunction(func) {
    console.log("I am a higher order function")
    func()
}

higherOrderFunction

//how you can use hof to write more concise and modular code

//suppose you want to write a function that calculates the area and diameter of a circle

//as a beginner you write separat function to calculate area and diameter

const radius = [42, 55, 12]

const calculateArea = function (radius) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i])
    }

    return output

}

const calculateDiameter = function (radius) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i])
    }

    return output
}

console.log("Area: ", calculateArea(radius))
console.log("Diameter:", calculateDiameter(radius))

//above writing same function again and again with sligjhtly different logic, also the above function are not reusable

// logic to clculate area
const area = function (radius) {
    return Math.PI * radius * radius;
}

// logic to calculate diameter
const diameter = function (radius) {
    return 2 * radius;
}

// a reusable function to calculate area, diameter etc...
const calculate = function (radius, logic) {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }

    return output
}

console.log("Area: ", calculate(radius, area))
console.log("Diameter: ", calculate(radius, diameter))

//we only need to write the logic and pass the calculate(), the function will do the job
//concise and modular

const circumeference = function (radius) {
    return 2 * Math.PI * radius;
}


console.log("Circumference: ", calculate(radius, circumeference));

//can use high order function in a variety of ways
//when working with arrays: use map, reduce, filter function to manipulate and transform data in an array
//when working with objects use object.entries function to create a new array from an object
//when working with functions use compose functions to create complex functions from simpler ones


//map- it is used to transform an array of data into a new array with a different structure
const array = [33, 55, 66, 77]
const addTen = array.map((map) => map + 10)

console.log(addTen)
console.log(array)


const users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 30 },
    { firstName: 'Jack', lastName: 'Doe', age: 35 },
    { firstName: 'Jill', lastName: 'Doe', age: 40 },
    { firstName: 'Joe', lastName: 'Doe', age: 45 },
]

const selectedUsers = users.map((user) => user.firstName + " " + user.lastName)
console.log(selectedUsers)


const arrOdd = [1, 2, 3, 4, 5];
const resultArray = arrOdd.filter((num) => num % 2 !== 0)
console.log(resultArray)

//when you want to perform some operations on an elements of an array and returns a single value
//merge multiple objects into single object, or to group different elements in array


const myNumberChoice = [33, 56, 88, 446]

//0 is used to initialize total valu to 0
const addingNumber = myNumberChoice.reduce((total, currentValue) => { return total + currentValue }, 0)

console.log("Adding Number: ", addingNumber)

const maxValue = myNumberChoice.reduce((max, currentValue) => {
    if (max < currentValue) max = currentValue
    return max
})

console.log("Max Value: ", maxValue)


//using reduce for merge object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const mergeObj = [obj1, obj2, obj3].reduce((acc, curr) => {
    let result = { ...acc, ...curr }
    return result
}, {})

console.log(mergeObj)


//group object in array
const shoppingCart = [
    { name: 'Apple', price: 1.99, quantity: 3 },
    { name: 'Apple', price: 1.99, quantity: 3 },
    { name: 'Xiomi', price: 2.99, quantity: 2 },
    { name: 'Samsung', price: 3.99, quantity: 1 },
    { name: 'Tesla', price: 3.99, quantity: 1 },
    { name: 'Tesla', price: 4.99, quantity: 4 },
    { name: 'Nokia', price: 4.99, quantity: 4 },
]

const products = shoppingCart.reduce((productGroup, product) => {
    const name = product.name
    if (productGroup[name] == null) {
        productGroup[name] = []
    }

    productGroup[name].push(product)
    return productGroup
}, {})

console.log(products)


// Use map when you want to transform an array

// Use filter to select a subset of data from an array, and

// Use reduce when you want to return a single value as a result.