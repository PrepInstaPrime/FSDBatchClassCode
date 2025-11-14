let d=10; // global 
function add(a,b){
    let c=9; // local 
    return a+b+c+d;
}
if(d>5){
    var e=9;
    let f=10;
}
function sub(a){
    console.log(e);
    console.log(f);
    return d-a;
}
console.log(add(2,3))
console.log(sub(5))

