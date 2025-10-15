const orignalObject = {
    name: "Saif",
    address: { city: "Lahore", country: { name: "Pakistan" } }
}


let shallowObj = Object.assign({}, orignalObject)
let deepObj = JSON.parse(JSON.stringify(orignalObject))

console.log("Before deep obj: ", deepObj)

console.log("Before Shallow Object:", shallowObj)

orignalObject.address.city = "Karachi"
orignalObject.address.country.name = "Turkey"

orignalObject.name = "Ahmad Ali Khan"

console.log("After Shallow Object:", shallowObj)

console.log("After Deep Object:", deepObj)