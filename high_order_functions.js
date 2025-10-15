//operateOnNumbers is a higher order function, it takes another function as arguement and returning function

function operateOnNumbers(array, operation) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result.push(operation(array[i]))
    }

    return result
}

function double(num) {
    return num * 2
}

function square(num) {
    return num * num
}

function subTract(num) {
    return num - 5
}

const numbers = [43, 54, 77, 44, 78]

console.log("Square: ", operateOnNumbers(numbers, square))
console.log(operateOnNumbers(numbers, double))
console.log(operateOnNumbers(numbers, subTract))

//