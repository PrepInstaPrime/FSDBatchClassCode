// difference 1: 
/*
let a=5; // global scope
if(4>2){ // local scope
    let b=10;  // becaue of var global
    console.log(a);
    console.log(b);
}
console.log(a)
console.log(b)
*/

/*
var a=5;
if(5>2){
    var b=10;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b) // accessible because of var 
*/

/*
const a=5;
if(5>2){
    const b=10;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)
*/

// difference 2: 
/*
let a=5;
var b=6;
const c=8;
function add(){
    // functional scope
    var d=1;
    let e=2;
    const f=3;
    console.log(a+b);
}
add()
console.log(d)
console.log(e)
console.log(f)
*/

// difference 3; 
/*
let a=5;
// let a=6; // can't re-declare varaible again with let
a=6;  // re - initialisation
console.log(a)

const b=5;
// const b =6; // // can't re-declare varaible again with const
// b=6; // re - initialisation is not possible
console.log(b)

var c=5;
var c=10; // re - declaration is possible
c="hey";   // re - initialisation is possible
console.log(c)
*/

// difference 4: 
let a=5;
const b=6;
var c=10;
function add(){
    let a=11;
    const b=12;
    var c=13;
    console.log("functional scope")
    console.log(a)
    console.log(b)
    console.log(c)
}
add()
console.log("Global scope")
console.log(a)
console.log(b)
console.log(c)
