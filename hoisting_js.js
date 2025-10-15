//it is appear all the declaraions are on the top of the code before execution
//javascript only hoist declarations not iniializations 
//declarations are hoisted on top of their respective scope


//all these possible for function declarations, hoisting does not occur on function expression(a function without name)


//below is some tricky code
printHello()

function printHello() {
    printInGoodMood()

    if (true) console.log("Working Good")
    console.log("Hello Saif Ali khan")

    function printInGoodMood() {
        console.log("Good")
    }

    printInNormalMood()

    function printInNormalMood() {
        console.log("Normal")
    }
}

//variable hoisting
//although hoisted happened here, variable declarion is hoisted but with the default value of undefined
//undefined
// console.log(name)
// console.log(myname)

var name = "Saif ALi Khan"
console.log(name)

//let say we declare name in a function
// console.log(goodName)
print()
function print() {
    // console.log(goodName) //hoisted but with default value of undefined
    var goodName = "JavaScript"
    console.log(goodName)
}


//hoisting let variable
//variables with let also hoisted they have a different behavior
//variable declared with let do not have a default value, like which we have in var
// console.log(ui)
let ui = "figma"

//with let variables are uninitialized

//variables hoisted to the top of their scope they are declared in local, global, block
//but not accessible because they have not been initialized. this concept is called temporal dead zone
//they can be accessible after the initialization line has been executed


//hoisting const variable
//just like let variable declared with const are hoisted, but not accessible

// console.log(name)
const programmingName = "Java"

//same concept of tdz apply to let, they remain inaccessible until the variables are initialized with the value
//does not have a default initialization
//same case with the class, we got refrence error
//hoisting is done, but we can't that class until the line of initialization is executed



class Animal {
    constructor(name) {
        this.name = name
    }
}

const dog = new Animal("Bully")

console.log(dog)

//