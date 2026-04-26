let a=5
let b=2
console.log(a&b); //0
console.log(a|b) //7
console.log(a^b) // 7
console.log(~a) // -6
console.log(5>>1) // 2
console.log(5<<1) // 10

console.log(2&1)
console.log(4&1)
console.log(22&1)
console.log(92&1)
console.log(7&1)
console.log(100&1)
console.log(57&1)

// find unique element in the array
let arr=[2,2,4,4,1,5,1]
let value=arr[0];
for(let i =1;i<arr.length;i++){
    value=value^arr[i]
}
console.log(value)