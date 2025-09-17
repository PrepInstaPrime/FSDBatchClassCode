let arr=[1,2,3,3];
console.log( typeof arr) // object
let str= JSON.stringify(arr)
console.log(typeof str) // string
let copyArr= JSON.parse(str)
console.log( typeof copyArr) // object