/*
let fridge=[1,2,3];
// shallow copy becuase of ref type
let refridgerator=fridge;  // refridgerator got the reference of the fridge not the value 
console.log(fridge)
console.log(refridgerator)
fridge.pop();
console.log("after removing value from fridge")
console.log(fridge)
console.log(refridgerator)
// deep copy becuase of value type
let a=5;
let b=a;  // b has stored the value 5 on new memory location
a=a+5;
console.log(a) // 10
console.log(b) // 5
*/


// let's try with object 
let fridge={
    coldDrink:"coca cola",
    juice:"Mango"
}
let refridgerator=fridge;
console.log(fridge)
console.log(refridgerator)
// let's update the key
fridge.juice="orange"
console.log("after updating the fridge")
console.log(fridge)
console.log(refridgerator)