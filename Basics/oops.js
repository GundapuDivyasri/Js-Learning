//oops
/*
object=collection of properties and methods

//parts of oops
objcet literal

-constructor function
-prototypes
-classes
-instances
*/
const user={
    name:"divya",
    login:true,
    details:function(){
        console.log(this);
        console.log(this.name);
    }
}
console.log(this);
console.log(user.details());

//new keyword:creates new instance-it is a constructor function
//const promise=new Promise();
function f1(username,login,islogin){
    this.username=username;
    this.login=login;
    this.islogin=islogin;
    return this //-it gets implicitly defined even if not mentioned 
}
const f1_details=f1("divya",10,true);
const f2_details=f1("teja",20,true);//override
const f3_details= new f1("devi",30,true);
/* console.log(f1_details);
console.log(f2_details); */
console.log(f3_details);

//instance of-used to check wheteher an object instance belong to particular constructor
console.log(f2_details instanceof f1);

//call
function setUserName(username){
    this.username=username;
}
function createUser(username,email,pwd){
    setUserName.call(this,username); //-this refers to new object of user1 
    this.pwd=pwd;
    this.email=email;
}
const user1=new createUser("alice","alice@gmail.com","123");
console.log(user1);