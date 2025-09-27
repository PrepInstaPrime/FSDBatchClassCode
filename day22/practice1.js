const prompt= require("prompt-sync")();
const n= parseInt(prompt("Enter the size of the array: "));
let arr=[];
if(isNaN(n)){
    console.log("invalid input")
}else{
    for(let i=0;i<n;i++){
        let num=parseInt(prompt("Enter the value: "));
        arr.push(num)
    }
    console.log(arr)
}
