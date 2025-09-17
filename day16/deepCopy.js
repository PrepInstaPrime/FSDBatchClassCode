/*
// note: ... "spread operator" only gives deep copy when u do not have nested arrays or object
let fridge=[1,2,3,4,5,6,[7,8,9]];
// ... it is a spread operator used to spread the values from ref type
let refridgerator=[...fridge]; // [1,2,3,4,5,6,arr[6]]
// update fridge 
// fridge.pop()
fridge[1]=9; // will not impact because of value type
fridge[6][1]=90; // will impact because of ref type
console.log("after updating fridge")
console.log(fridge)
console.log(refridgerator)

*/

// JSON.parse and JSON.stringyfy

let arr=[1,2,3,[4,5,6]];
// console.log(typeof arr)
let str= JSON.stringify(arr) // converting array to string ( ref to value type)
console.log("array in String form "+str)
let arrCopy= JSON.parse(str);
console.log( typeof arrCopy)
