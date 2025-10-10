// it only stores unique values 
let set= new Set();
set.add(1);
set.add(2)
set.add(2)
set.add(1)
set.add(3)
set.add("hello")
console.log(set)
console.log(set.size)
console.log(set.has(1)) // looks for value in set 
console.log("is deleted: "+set.delete(5)) // delete the value 
console.log(set) // printing the set
set.clear() // removing all the values 
console.log(set) // printing the set