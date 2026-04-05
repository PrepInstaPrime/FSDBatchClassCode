function parent(){
    let a=5;
    let b=6;
    function child(){
        let c=7;
        return a+b+c;
    }
    return child;
}
let sum=parent();
console.log(sum())