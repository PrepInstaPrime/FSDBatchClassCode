let fridge=[1,2,3,4,5,6];
// ... it is a spread operator used to spread the values from ref type
let refridgerator=[...fridge]; // [1,2,3,4,5,6]
// update fridge 
fridge.pop()
console.log("after updating fridge")
console.log(fridge)
console.log(refridgerator)