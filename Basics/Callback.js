//callback-passing function as a parameter to other function
/* function greet(guest="stranger"){
    console.log(`Hello ${guest}`);
}
const wish=(name,greeting)=>{
    greeting(name);
}
wish("divya",greet);

//callback hell-nested callbacks stacked below one another causes difficulty in managing and understanding.
function getdata(id,getnext_data){
    setTimeout(()=>{
        console.log(`Id is:${id}`);
    
    if(getnext_data){
        getnext_data();
    }
},2000);
}
getdata(1,()=>{           
    getdata(5,()=>{                      
        getdata(3);                    
                                        
    });
});
 */

//promises -to overcome callback hell
//promises-It is an objects that represnts the eventual completion of task
//resolve,reject are callbacks 
/*
states of promise:
1.pending
2.full filled
3.rejected
*/
/* let promise=new Promise((resolve,reject)=>{
    console.log("Interview");
    setTimeout(()=>{
        console.log("Preparation going on lets rock it");
        resolve("success");
    },6000) ; 
}); */

//Generally we dont create promises the are returned as result when we request something
//we can use the promises:
/* .then()&.catch()
promise.then((res)=>{..})-fulfilled
promise.catch((err)=>{...})-rejected
*/
/* const result=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I cracked the interview");
        resolve("Got a job offer");
    });
}
let news=result();
news.then((res)=>{
    console.log(res);
}); */

//promise chaining
/* function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Started revision");
            resolve("Going with good vibes");
        },3000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Cleared TR1");
            resolve("Final Step :Its success");
        },3000);
    });
}
let outcome=asyncFunc1();
outcome.then((res)=>{
    console.log(res);
    let final_output=asyncFunc2();
    final_output.then((res)=>{
        console.log(res);
    });
}); */

//async-await 
/*async function returns always a promise
await pause the execution of its surrounding async function untion promise is settles
we can use await inside an async function only
*/
/* function fetch_data(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Fetching data ${id}`);
            resolve("success");
        },3000);
    });
}
(async function (){
    await fetch_data(1);
    await fetch_data(2);
    await fetch_data(3);

}) (); */

