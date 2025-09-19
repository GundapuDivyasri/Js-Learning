/* var name="divya"
const id=1
let address="kuchipudi"
address="bhoghapuram"
console.table([name,id,address]) */
/* var is not currently used due to the scope drawback.
const is used when the data or value remains constant.
let is used when data needs to be updated we can use the same let variable but can update it.
*/

/*Data types:primitive
number-2 power 53 
bigint,string,booelan,null-stand alone value(let room=null)-type:object
undefined-value not assigned-type:undefined,symbol
Non-primitive:
object,arrays,functons*/
//Immediately invoked function expression

/* function Login(username,callback){
    console.log(`Logging in process`);
    setTimeout(()=>{
        console.log(`${username} Logged in successfully`);
        callback(username);
    },2000);
}
const greet=(user)=>{
    console.log(`Welcome to the Dashboard ${user}`);

}
Login("Divya",greet); */

/* function Login_System(user){
    console.log('Login in process');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log(`${user} logged in successfully`);
            resolve(user);
    },3000);
});
}
function greet(user){
    console.log(`welcome to the dashboard ${user}`);
}
Login_System("divya").then(greet).catch((err)=>{
    console.log(err);
}); */
 function Login_System(user){
    console.log('Login in process');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log(`${user} logged in successfully`);
            resolve(user);
    },3000);
});
}
function greet(user){
    console.log(`welcome to the dashboard ${user}`);
}
(async function (){
    await Login_System("divya");
    greet("divya");
}) ();