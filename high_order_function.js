
function add(num_1, num_2, cb) {
    let result = num_1 + num_2 //this lines may take time, so we use a callback function, to give results when those lines are completed
    cb(result)

    // return () => console.log(result)
    return function () {
        console.log(result)
    }
}

function showResult(result) {
    console.log("Result is: ", result)
}


// add(10, 20, showResult)
// add(10, 20, val => showResult(val))

let resultValue = add(10, 20, () => { })
resultValue()
console.log(resultValue()) //this will print the result with undefined