//practical benefits of closure
//combination of function bundled together
//have accessed to the data of its surrounding state/lexical environment

function main() {
    const name = "Saif ALi Khan"

    function greet() {
        console.log("Hello: ", name)
    }

    greet() //this function is closure
    return greet
}


main()
console.log(main())


//making utility function

function add(num1) {

    function adder(num2) {
        if (num1 === 20) {
            return num1 + num2
        }

        if (num1 === 30) {
            return num1 * num2
        }

    }

    return (adder)
}

let add10 = add(30)
console.log(add10(90))


function makeCounter() {
    let count = 0

    function increment() {
        count++
        console.log(count)
        console.log("Repeated, ", Math.random())
    }

    return increment
}

let counter = makeCounter()
counter()
counter()
counter()
counter()

//