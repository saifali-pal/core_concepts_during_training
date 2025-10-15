

//Generics function
function identity <T>(arg: T):T{
    return arg
}

let output= identity<string>("Saif")
let numOutput = identity(32)

//Generics interfaces
interface GenericIdentityFn<T>{
    (arg: T): T
}

let myIdentity: GenericIdentityFn<number> = identity

