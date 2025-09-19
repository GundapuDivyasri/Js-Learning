const obj={
    name:"divya",
    age:20,
    group:"csm",
    message:function(){
        console.log(`Hello ${this.name}`);
        console.log(this);
    }
}
console.log(this);
console.log(obj.message());
obj.name="teja";
console.log(obj.message());
const add=(n1,n2)=>({name:"divya"})
console.log(add(2,3));



//js execution steps:
/*step1:
memeory phase :In this phase memory will be allocated to the variables,objects,functions
variables-undefined,functions-definition,let,const-Temporal dead zone
step2:
Execution phase:the actual values will be assigned to variables.
The function call will be executed.
*/

