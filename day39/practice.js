// reverse an array with the help of stack
// arr=[1,2,3,4]
// output= [4,3,2,1]
class Stack{
    constructor(){
        this.stack=[];
    }
    push(data){
        this.stack.push(data);
    }
    isEmpty(){
        if(this.stack.length==0){
            return true;
        }else{
            return false;
        }
    }
    pop(){
        if(this.isEmpty()){
            console.log('Stack is underflow');
            return;
        }
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            console.log('Stack is Empty');
            return;
        }
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
    clear(){
        this.stack=[];
    }
}
let stack = new Stack();
let arr= [1,2,3,4];
for(let i=0;i<arr.length;i++){
    stack.push(arr[i]);
}
let size= stack.size()
for(let i=0;i<size;i++){
    arr[i]=stack.pop();
}
console.log(arr)