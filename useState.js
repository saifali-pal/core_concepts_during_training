// const [state, setState] = useState(initialState)

//array destrucuring:
//Extraction by position Skipping elements
const numbersToAdd = [32, 54, 77, 89]
const [first, second, third, ,] = numbersToAdd

console.log(second)

//rest parameter:
//gather remaining element of an array into new array
const data = [32, 5, 6, 23, 66, 43, 65]
const [num1, num2, ...restOfData] = data

//default values:
const names = ["Alice"]
const [name1, name2 = "Java"] = names

//swapping variables without a temp variable:
let x = 80, y = 12
[x, y] = [y, x]

//Nested Destructring:
const matrix = [[1, 2], [3, 4]]
const [[num1_1, num2_2], [num3, num4]] = matrix



//Array Destructuring mostly used when working with functions that return arrays or when needing to extract specific values from an array
//initial state: can be any data type: primitive, object, array, etc...
//call setStateVariable function with the new value, direclty modify statvariable will not trigger a re-render

//pass a function to the setter if the new state depends on the previous state
//setCount(prevCount => prevCount + 1)

// When setStateVariable is called with a new value, React re-renders the component to reflect the updated state in the UI. React may batch multiple state updates within a single render cycle for performance optimization.

// Rules of hooks: useState (and other hooks) must be called at the top level of a functional component or a custom hook. They cannot be called inside loops, conditionals, or nested functions to ensure a consistent order of execution across renders.


const [todo, setTodo] = useStat(() => createTodo())

//initial State: value of the state to be initially, it can be a value of any type
//special behaviour for functions 
//for calling useState inside loops or conditions, then extract a new component and move the state into it

//pass next state direclty or a function that calculates it from the previous state

function handleClick() {
    setName("Saif")
    setAge(a => a + 1)
}

//parameter: nextState => value of next state can be of any type, but there is special behavior for functions 

//when passing a function as nextstate, it will be treted as updater function, 
// should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state

//set function do not have a return value

//set function only updates the state variable for the next render

//If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. This is an optimization. Although in some cases React may still need to call your component before skipping the children, it shouldn’t affect your code.

//If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. This is an optimization. Although in some cases React may still need to call your component before skipping the children, it shouldn’t affect your code.

// The set function has a stable identity, so you will often see it omitted from Effect dependencies, but including it will not cause the Effect to fire. If the linter lets you omit a dependency without errors, it is safe to do. Learn more about removing Effect dependencies.

//Calling the set function during rendering is only allowed from within the currently rendering component. React will discard its output and immediately attempt to render it again with the new state. This pattern is rarely needed, but you can use it to store information from the previous renders

//In Strict Mode, React will call your updater function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your updater function is pure (as it should be), this should not affect the behavior. The result from one of the calls will be ignored.

//To update what's on screen, call the setfunction with the some next state

function handleClick() {
    setMyAge(a => a + 20)
}

//pitfall: calling the set function does not change the current state, in the already executing order
function handleanotherClick() {
    setAge(b => b + 20)
    console.log(agr) //still -prev
}

// However, after one click, age will only be 43 rather than 45! This is because calling the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).
// only effect what usestate will return starting from next render

//updater function, takes pending state and calculate the next state from it
//setAge(a => a + 1)


//React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

// a => a + 1 will receive 42 as the pending state and return 43 as the next state.
// a => a + 1 will receive 43 as the pending state and return 44 as the next state.
// a => a + 1 will receive 44 as the pending state and return 45 as the next state.

// There are no other queued updates, so React will store 45 as the current state in the end.

//passing the updater function so +3 button works vs passing the next state directly, +3 button does not work as intended


//updating objects and arrays in state
//state is considered read-only, so you should replace it rather than mutate your existing object
//if you have form object in state, dont mutate it

// Dont do this:
// form.firstname = "java"

//instead, replace the whole object by creating a new one
setForm({
    ...Form,
    firstName: "Saif"
});

//https://react.dev/learn/updating-objects-in-state
//https://react.dev/learn/updating-arrays-in-state

//The { ...form } spread syntax ensures that the state object is replaced rather than mutated.

//https://react.dev/learn/updating-objects-in-state#updating-a-nested-object

//Examples of objects and arrays in state



//avodiing recreating the initial state

//react saves the initial state once and ignore it on the next renders
//const [todo, setTodo] = useState(createInitialTodo())

// Although the result of createInitialTodos() is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating large arrays or performing expensive calculations.

//To solve this, you may pass it as an initializer function to useState instead:
//const [todo, setTodo] = useState(createInitialTodo)



//The difference between passing an initializer and passing the initial state directly

// useState(createInitialTodos()) less ; vs useState(createInitialTodos) more efficient

//Resetting state with a key

//https://react.dev/learn/rendering-lists

//You can reset a component’s state by passing a different key to a component

//https://react.dev/learn/preserving-and-resetting-state


//Storing information from previous renders


//Troubleshooting

