let stack=[];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack)
let deleteTop=stack.pop();
console.log(stack)
console.log(`deleted value ${deleteTop}`)
function isEmpty(){
    return stack.length===0;
}
console.log(isEmpty())
function size(){
    return stack.length;
}
console.log(size())
function peek(){
    return stack[stack.length-1];
}
console.log(peek())