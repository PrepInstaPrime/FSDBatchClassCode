let name1="hey classes this is lecture 17"
// note: strings in js are immutable , means can't change
// uppercase 
console.log(name1.toUpperCase())
// console.log(name1)
// lower case
console.log(name1.toLowerCase())
console.log(name1.slice(1)) // ey
console.log(name1.slice(-4,-1)) // las
console.log(name1.substring(1,3))
// difference : substring does not take negative indexes , it treats negative values as 0 
// substr(starting index , no. of elements)
console.log(name1.substr(1,2)) // not in use
// length 
console.log(name1.length)
// accessing value 
console.log(name1[2])
// iterating over string 
for(let i=0;i<name1.length;i++){
    console.log(name1[i])
}
// search value : if found return index other wise return -1
console.log(name1.indexOf("he"));
// convert string into array
// split 
let arr= name1.split("")
console.log(arr)
let arr1= name1.split(" ")
console.log(arr1)
// repeat 
let str="    Hello    "
console.log(str.repeat(20))
// trim is used to remove extra spaces 
console.log(str.trim())
console.log(str.split('').reverse().join(""))
let para="  hey this is prasoon   "
console.log(para.trim())


