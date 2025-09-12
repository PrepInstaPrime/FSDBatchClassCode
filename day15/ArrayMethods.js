let arr = [1, 2]
// adds value at last 
arr.push(3)
console.log(arr) // [1,2,3]
// pop: remove the value from the last
arr.pop()
console.log(arr) // [1,2]
// unshift : adds value at start
arr.unshift(4) // [4,1,2]
console.log(arr)
// shift : removes the value from start
arr.shift() // [1,2]
console.log(arr)
// length of the array
console.log(arr.length)
// join : converts array into string
arr.push(4)
let str = arr.join("*")
console.log(str)
arr.push(5)
arr.push(7)
// arr = [1,2,4,5,7]
// slice 
let part = arr.slice(0, 4)
// console.log(arr)
console.log(part)
// how to delete from mid 
// arr.splice(startIndex, no. of elements to be deleted , elements to be added)
// arr=[ 1, 2, 4, 5, 7 ]
arr.splice(1, 4, 90, 10); // [ 1, 90, 10 ]
console.log(arr)

// whenever any value gets deleted , it will always be returned by the method
// example
let a = arr.pop() // here the value of a will be last deleted value 
console.log(a)