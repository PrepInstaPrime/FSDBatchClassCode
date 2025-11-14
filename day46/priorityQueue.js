class PriorityQueue{
    constructor(){
        this.heap=[]
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    left(i){
        return i*2+1;
    }
    right(i){
        return i*2+2;
    }
    // TC: O(logn)
    insert(val,priority){
        this.heap.push({val,priority});
        let i=this.heap.length-1;
        // bubble up 
        while(i>0&&this.heap[i].priority<this.heap[this.parent(i)].priority){
            // swap 
            let temp=this.heap[i];
            this.heap[i]=this.heap[this.parent(i)];
            this.heap[this.parent(i)]=temp;
            i=this.parent(i);
        }
    }
    extract(){
        let min= this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapify(0);
        return min;

    }
    heapify(i){
        let smallest=i;
        let len=this.heap.length;
        let leftChild=this.left(i);
        if(leftChild<len&&this.heap[leftChild].priority<this.heap[smallest].priority){
            smallest=leftChild;
        }
        let rightChild= this.right(i);
        if(rightChild<len&&this.heap[rightChild].priority<this.heap[smallest].priority){
            smallest=rightChild;
        }
        if(smallest!=i){
            // swap
            let temp=this.heap[smallest];
            this.heap[smallest]=this.heap[i];
            this.heap[i]=temp;
            this.heapify(smallest);
        }
    }

}
let pq= new PriorityQueue();
pq.insert(5,3)
pq.insert(3,1)
pq.insert(8,2)
pq.insert(2,7)
pq.extract()
console.log(pq.heap)