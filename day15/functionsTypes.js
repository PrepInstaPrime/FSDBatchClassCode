/*
// function declaration
function buaJi(a, b){
    // console.log(a+b);
    return a+b;
}
// function expression
let shopping= function (a,b){
    console.log("Let's buy something of "+ (a+b) +" Rupee")
}
// arrow function
let addition= (a,b)=>console.log(a+b)
let shatunu= buaJi(2,3)
let prashant= buaJi(5,5)
// console.log(shatunu)
shopping(shatunu,prashant)
addition(8,9)
*/
/*
function money(a,b){
    // console.log(a+b)
    return a+b;
}
// let expense=function (a,b){
//     return a-b;
// }
// arrow function
let expense=(a,b)=>{
    console.log("remaining amount")
    return a-b;
}
let totalMoney= money(5,10);
let remaining= expense(totalMoney,10);
console.log(remaining);
*/


let mul=function (a,b){
    return a*b;
}

let divideByFive=function(a){
    return a/5;
}
let divideByTwo = (a)=>a/2;
let multiplication= mul(5,10);
console.log(multiplication);
console.log(divideByFive(multiplication));
console.log(divideByTwo(multiplication))