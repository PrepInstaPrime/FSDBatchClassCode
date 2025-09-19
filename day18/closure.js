/*
function add(){
    let a=5;
    let b=6;
    return function print(){
        console.log(a+b);
    }
}
// console.log(add()) // 
let sum= add();
sum()
*/

function parent(){
    let money=10000;
    return function child(){
        let cMoney=5000;
        console.log(money+cMoney)
    }
}
let childProperty= parent();
childProperty()