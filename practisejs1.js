console.log("hello world")//prints data to the console

document.getElementById("name").innerHTML="Vardhan" //adding name to h1 tag

//var keyword has function level scope and allows multiple declarations in same scope
var k=5;
{
    var k=10;//k changed its value from 5 to 10//Hoisting
}
document.getElementById("Varkeyword").innerHTML=`value of k is ${k}`;//k=10;


//let keyoword has block level scope and  doesnot allow multiple declarations in same scope

let a=10;
{
    let a=5;
    document.getElementById("letkeyword").innerHTML=`value of a is ${a}`;//a=5 here
}
document.getElementById("letkeyword").innerHTML=`value of a is ${a}`;//a=10 here

//const keyword doesnot allow us to reassign,but we can change the properties
/*

try{
const b={"name":"vardhan","age":20}
console.log(b)
b["name"]="karthik"
console.log(b)//we could chANGE the property of b i.e name
b={"name":"karthik","age":21}//you cannot reasign,will lead to error
}
catch(err)
{
    alert(err)

}

*/

//OPERATOTS


/*
var num1=prompt("enter first number")//reading values from prompt
var num2=prompt("enter second number")
num1=+num1
num2=+num2
*/

num1=30
num2=40

//ARITHMATIC OPERATORS
console.log(`adding num1 ${num1} and num2 ${num2} is ${num1 + num2}`)
console.log(`sunstracting  num1 ${num1} and num2 ${num2} is ${num1 - num2}`)
console.log(`multiplying num1 ${num1} and num2 ${num2} is ${num1 * num2}`)
console.log(`modulo of  num1 ${num1} and num2 ${num2} is ${num1 % num2}`)
console.log(`power  of  num1 ${num1} and num2 ${num2} is ${num1 ** num2}`)
console.log(`dividing  num1 ${num1} and num2 ${num2} is ${num1 / num2}`)
console.log(num1++)
console.log(num2--)
num1=20
num2=40
//comparision operators
console.log(`${num1} > ${num2} is ${num1>num2}`)
console.log(`${num1} < ${num2} is ${num1<num2}`)
console.log(`${num1} >= ${num2} is ${num1>=num2}`)
console.log(`${num1} <= ${num2} is ${num1<=num2}`)
console.log(`${num1} == ${num2} is ${num1==num2}`)
console.log(`${num1} != ${num2} is ${num1!=num2}`)
console.log(`${num1} === ${num2} is ${num1===num2}`)
console.log(`${num1} !== ${num2} is ${num1!==num2}`)

var str1="vardhan"
var str2="goud"
console.log(str1+str2)//+ used for string concat


//logical operators

console.log((num1>num2)&&(num1=2*num2))
console.log((num1>num2)||(num1==2*num2))
console.log(!(num1>num2))


//bitwise operators

console.log(`${num1} & ${num2} is ${num1&num2}`)//bitwise and
console.log(`${num1} | ${num2} is ${num1|num2}`)//bitwise or
console.log(`~ of ${num1} is ${~num1}`)//bitwise not
console.log(`${num1} << 2 is ${num1<<2}`)//left shift
console.log(`${num1} >> 2 is ${num1>>2}`)//right shift


document.getElementById("name").style.color="red";


console.log(typeof(num1))
console.log(typeof(str1))
console.log(typeof([12,3,4,4]))//describes the type
console.log(2 in [1,2,3,4])//membership operator

console.log(2>3?"2 is greater":"3 is greater")//ternamry operator








//datatypes

console.log(typeof(null))
console.log(typeof(undefined))

//primitive datatypes

console.log(typeof("abc"))//string
console.log(typeof(3))//number
console.log(typeof(3.223))//numnber
console.log(typeof undefined)//undefined
console.log(typeof null)//object
console.log(typeof [1,2,3,4,4])//object
console.log(typeof {abc:1,cbd:2})//object
console.log(typeof function myfun(){})//function
console.log(typeof(1==2))
console.log(null==undefined)//true
console.log(null===undefined)

console.log("abc"+20+30)
console.log(20+12+"abc")//exp is evaluated from left to right
console.log("10"+20)














