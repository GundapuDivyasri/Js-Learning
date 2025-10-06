class User{
    constructor(username){
        this.username=username;
    }
     static logMe(username){
        console.log(`UserName:${username}`);
    }
}
class Student extends User{
    constructor(username,email,pwd){
        super(username);
        this.email=email;
        this.pwd=pwd;
    }
    addStudent(){
        console.log(`Added Student name:${this.username}`);

    }

}
const s1=new Student("divya","di@gmail.com","123");
console.log(User.logMe("teja"));
console.log(s1);
console.log(s1.addStudent());


