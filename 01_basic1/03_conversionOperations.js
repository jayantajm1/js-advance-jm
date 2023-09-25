/* when work at backend and  we don't know the type of the values then we need to type conversion
*/
let score=null
let valueInNumber=Number(score)
console.log(typeof score)
console.log(typeof(valueInNumber))
//console.log(valueInNumber)
/*  score =undefine ,"jaua" mean o/p o will be NaN => special  type of data
// "33"=> 33
"33abc"=>NaN
true=>1
false=>0
*/
let loggedIn="jaya"
let booleanLoggedIn=Boolean(loggedIn)
console.log(booleanLoggedIn)
/* 1=>true; 0=> false
""=>false
"jaa"=>true
*/
let j=76
let stringNum= String(j)
console.log(typeof stringNum)


//*********Operations **********
/*let value=3
let negValue=-value
console.log(negValue)
console.log(2**3)
console.log(2%3)
*/
let str1="hello"
let str2= "world"
console.log(str1+ str2)
console.log("2"+2)
console.log(2+"2")
console.log("1"+2 +2)
console.log(1+2+"2") // here atfirst it add the first two number then its perform string operation (ecmacscript for more info)
//console.log(3+5*2%2);
//console.log(+true)
let gameCounter=100;
gameCounter++
console.log(gameCounter)
let x=3
const y=x++
// expected op x:4 y:3
console.log(x,y)
let a=3;
const b=++a
console.log(a,b)
//expected op a:4 b:4
