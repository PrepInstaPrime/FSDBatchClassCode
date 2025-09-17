// higher order functions works on array
// if any function recieves another function as argument , then it's higher order function 

let arr=[1,2,3,4,5,6,7,8,9,10];
// create new array with even values only 
// filter((val, idx, arr)=>condition)
let even= arr.filter((ele)=>ele%2==0);
let names=["mohan","karan","nikita","vijay","karan"]
let newNames= names.filter((ele)=>ele!="karan");
console.log(newNames)
function odd(val){
    if(val%2==1){
        return val;
    }
}
let oddValues= arr.filter(val=>odd(val));
console.log(oddValues)

// map higher order function , it is used when u want to update or access each value 
// array.map((val, idx, arr)=>function)
let user=["Nitita","Mohan","Vijay","Prashant"];
let updatedUser=user.map((ele,idx,arr)=>ele="Dev "+ele)
console.log(updatedUser)
let square= arr.map(ele=>ele=ele*ele);
console.log(square)

// reduce : when you want to convert your complete array in single value
let sum= arr.reduce((val,acc)=>val+acc,5) // acc=0
console.log(sum)
let mul= arr.reduce((val,acc)=>val*acc,1)
console.log(mul)