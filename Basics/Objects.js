//objects
const obj=Object("id")
const user={
    [obj]:1,
    name:"divya",
    age:20,
    city:"vizianagaram",
    greeting:function(){
        console.log("hello")
    }
}
for(let key in user){
    console.log(key)
}
console.log(user.greeting())
const o1={1:"a",2:"b"};
const o2={3:"c",4:"a"};
const o3=Object.assign({},o1,o2);
console.log(o3);
//Destructuring-assinging properties of objects to variables
//used in react-props:function profile({name,course}){ return <h1>{name}{course}</h1>},api responses
const course={
    name:"js",
    price:200,
    mentor:"hitesh"
}
const {mentor,price,name}=course
console.log(mentor,name)

//Example-api data fetching
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data));
