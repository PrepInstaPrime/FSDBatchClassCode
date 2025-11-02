class Queue{
    constructor(){
        this.queue= [];
    }
    enqueue(data){
        this.queue.push(data);
    }
    isEmpty(){
        if(this.queue.length==0){
            return true;
        }else{
            return false;
        }
    }
    deque(){
        if(this.isEmpty()){
            console.log("Queue is underflow");
            return;
        }
        return this.queue.shift();
    }
    size(){
        return this.queue.length;
    }
    clear(){
        this.queue=[]
    }
    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return;
        }
        return this.queue[0];
    }
}
let queue= new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.deque())
console.log(queue.peek())
console.log(queue.size())
queue.clear()
console.log(queue)