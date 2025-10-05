const bcrypt=require('bcrypt');
class User{
    constructor(name,email,pwd){
        this.name=name;
        this.email=email;
        this.pwd=pwd;
    }
    encrypt_pwd(callback){
        bcrypt.hash(this.pwd,10,(err,hash)=>{
            if(err) return callback(err);
            this.pwd=hash;
            callback(null,`pwd:${this.pwd}`);
        });
    }
   /* async encrypt_pwd(){
    try{
        this.pwd=bcrypt.hash(this.pwd,10);
        return `encrypted pwd:${this.pwd}`;
    }
    catch(err){
        console.log(err);
    }

   } */
}
const user1=new User("js","js@gmail.com","js123");
const user2=new User("java","java@gmail.com","java123");

 user1.encrypt_pwd((err,res)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(res);
    }
});
user2.encrypt_pwd((err,res)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(res);
    }
});

/*
A prototype is like a shared toolbox for all objects created from a constructor function or class
instead of giving copy of method for every object it is stored in the prototype 
so every object can reuse it.
user1,user2 can access the encrypt_pwd through prototype chain

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
*/