const pro1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async 1");
        resolve("Async 1 completed");
    },1000)
}).then(()=>{
    console.log("task1 resolved");
});

const pro2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async 2");
        resolve({name:"krishna"});
    },1000)
});
pro2.then((obj)=>{
    console.log(obj);
});

const pro3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async 3");
        let error=true;
        if(error){
        resolve({name:"bob",email:"bob@gmail.com"});
        }
        else{
            reject("Error");
        }
    },1000)
});
/* pro3.then((user)=>{
    return user.name;
}).then((user_name)=>{
    console.log(user_name);
}).catch((err)=>{
    console.log(err);
}); */
async function pro3_consume(){
    try{
        const response=await pro3;
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}
pro3_consume();
//using async-await
/* async function pro_consume(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}pro_consume(); */
//using fetch
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

//the fetch block executes first due to priority.