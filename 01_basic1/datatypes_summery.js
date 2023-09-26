//primitive
//7 types :String,Number,Boolean,null,,undefined,Symbol(values unique),BigInt(long number /scientific number /crypto number)



//Reference Type(Non Primitive)
// Array,objects,Functions etc


//Dynamically type bcz we did not to define data type;

const score =100
const scoreValue=100.3
const isLoggedIn=false
const outSideTemp=null // data type of null is obj
let userEmail; //undefined
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)
const bigNumber=98765432347658n // we add n in the last of the number for defined BigInt

console.log(typeof bigNumber)
const heros=["Shaktiman","nagraaj","Deva"] // heros data type object
let myObj=
{
    name :"jayanta",
    age:19
}
const myfun =function(){
    console.log("hello world")
}
console.log(typeof outSideTemp) //object 
console.log(typeof myfun) //object function
console.log(typeof myObj) //object
console.log(typeof heros) //object
console.log( typeof id) //Symbol


// doc 
// https://262.ecma-international.org/5.1/#sec-11.4.3
