const num=[1,2,3,4,5];
console.log(num)
num.unshift(9)
console.log(num)
num.shift()
console.log(num)
const num1=num.slice(1,3);
console.log(num1)
const num2=num.splice(1,3);// manipulates original array
console.log("c",num)
console.log(num2)
//shallow copy -share common reference
//deep copy-do not share common reference
const original={name:"rossy",address:{city:"vizag"}}
const shallow_copy={...original}
shallow_copy.address.city="mysore"
console.log(original)
const original_1={name:"rossy",address:{city:"vizag"}}
const deep_copy=structuredClone(original_1)
deep_copy.address.city="mysore"
console.log(original_1)

//difference b/w concat & push
const n1=[1,2,3];
const n2=[4,5,6];
//n1.push(n2);
console.log(n1)
const n3=n1.concat(n2)
console.log(n3)//-return new array
const n4=[...n1,...n2] //-spread operator
console.log(n4)
//forEach loop
const arr=[1,2,3,4,19,20,22];
arr.forEach(num=>{
    console.log(num);
})
const details={
    name:"divya",
    age:20,
    section:"csm"
};
for(let num in details){
    console.log(details[num]);
}
//map,filter,reduce
//map-creates a new copy array by performing the operation on each element
const nums=arr.map((n)=>n+10);
console.log(nums);
const newarr=arr.map((n)=>{return n*2});
console.log(newarr);
//filter-used to filter the data based on the condition
const arr1=arr.filter((n)=>n>2);
console.log(arr1);
const arr2=arr.filter((n)=>{ return n%2==0});
console.log(arr2);
const arr3=arr.filter((n)=>n%2==0).map((n)=>n*2);
console.log(arr3);
//reduce-performs an action and reduces the array to single value
const arr4=arr.reduce((max,curr)=>curr>max?curr:max,arr[0]);
console.log(arr4);