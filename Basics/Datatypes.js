const arr=[1,2,3,4]
const obj={
    name:"divya",
    roll:74
}
const fun=function(){
    console.log("hello")

}
fun()
console.table([typeof arr,typeof obj,typeof fun]);
//stack-primitive heap-Non primitive
const naam="divya"
console.log(naam.toUpperCase())
console.log(naam)
console.log(naam[1])
console.log(naam.charAt(1))
const reverse=naam.slice(-5,-2)
console.log(reverse)
const lan="  javascript  js"
console.log(lan.trim())
console.log(lan.replace('script','java'))
const decimal=100.93456
console.table([decimal.toFixed(2),decimal.toPrecision(3),decimal.toString().length])



