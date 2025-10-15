//async tasks returns us promises
//agr ksi line ko await krwana hoga to use async function mai dalna hoga

// function add() {
//     return console.log(89 + 12)
// }

let a = 23, b = 90
let result = a + b

async function getData() {
    let resultFromServer = await fetch("https://jsonplacholder.typicode.com/todos/2")

    return async function () {
        return await console.log(resultFromServer.json())
    }
}


fetch('https://jsonplacholder.typicode.com/todos/2').then((data) => { console.log(data) }).catch((error) => { console.log("Saif's Error: ", error) }).finally(() => { console.log("finally") })




console.log(getData())

// add()

console.log(result)
// console.log(resultFromServer)