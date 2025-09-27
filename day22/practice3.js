/*
const arr=[1,2,3,4,5];
for(let i=0;i<5;i++){
console.log(arr[i])
}*/

const prompt= require("prompt-sync")();
let n=parseInt(prompt("Enter the size of the array"));
let arr=[];
for(let i=0;i<n;i++){
    let num=parseInt(prompt("Enter the value: "))
    arr.push([num,num*num])
}
