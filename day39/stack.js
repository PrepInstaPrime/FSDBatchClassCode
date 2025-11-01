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
stack.push(5);
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack)
console.log(stack.pop())
console.log(stack)
console.log(stack.peek())
console.log(stack.size())
stack.clear()
console.log(stack.isEmpty())