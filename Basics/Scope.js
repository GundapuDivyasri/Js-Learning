let a=100;
if(true){
    let a=10;
    let b=20;
    const c=30;
    console.log("Inner block",a);
}
console.log(a);
console.log(add_num(2,3));
function add_num(a,b){
    return a+b;
}
//console.log(addition(4,5));  //-error due to function is assiged to variable so we canot access the function before initialization.
const addition=function(a,b){
    return a+b;
}
console.log(addition(4,5));

//Arrow functions-ES6 feature

const num=[1,2,3,4];
const new_map=num.map(function(n){ //-Hiogh order function
    return n*3;
})
console.log(new_map);

//Immediately invoked function expression
(function (){
    console.log("Hello world");
})();

//setTimeOut,setInterval
const interval=setInterval(()=>{
    console.log("Interval after 2 sec");
},2000);
setTimeout(()=>{
    clearInterval(interval);
},5000);