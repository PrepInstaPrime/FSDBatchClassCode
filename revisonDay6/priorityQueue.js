class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    leftChild(i) {
        return i * 2 + 1;
    }
    rightChild(i) {
        return i * 2 + 2;
    }
    insert(val,priority) {
        this.heap.push({val,priority});
        let i = this.heap.length - 1;
        while (i > 0 && this.heap[i].priority < this.heap[this.parent(i)].priority) {
            let temp = this.heap[i];
            this.heap[i] = this.heap[this.parent(i)];
            this.heap[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }
    delete() {
        if(this.heap.length===0){
            return "Queue is empty"
        }
        if(this.heap.length===1){
            return this.heap.pop();
        }
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return min;

    }
    heapify(i) {
        let smallest = i;
        let len=this.heap.length;
        // let left=this.leftChild(i);
        // let value=this.heap[this.leftChild(i)]
        if (len > this.leftChild(i) && this.heap[this.leftChild(i)].priority < this.heap[smallest].priority) {
            smallest = this.leftChild(i);
        }
        if (len > this.rightChild(i) && this.heap[this.rightChild(i)].priority < this.heap[smallest].priority) {
            smallest = this.rightChild(i);
        }
        let temp = this.heap[smallest];
        this.heap[smallest] = this.heap[i];
        this.heap[i] = temp;
        if (i != smallest) {
            this.heapify(smallest);
        }

    }
}
let minHeap = new PriorityQueue();
minHeap.insert("aman",5);
minHeap.insert("mohan",6);
minHeap.insert("karan",8);
minHeap.insert("deewas",9);
minHeap.insert("shantanu",10);
minHeap.insert("abhijeet",4);
minHeap.insert("tapas",7);
console.log(minHeap.delete())
console.log(minHeap.delete())
console.log(minHeap.delete())
console.log(minHeap.delete())
console.log(minHeap.delete())
console.log(minHeap.delete())
console.log(minHeap.delete())
console.log(minHeap.delete())
console.log(minHeap.heap)