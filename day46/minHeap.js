class minHeap{
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
    insert(val){
        this.heap.push(val);
        let i=this.heap.length-1;
        // bubble up 
        while(i>0&&this.heap[i]<this.heap[this.parent(i)]){
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
        if(leftChild<len&&this.heap[leftChild]<this.heap[smallest]){
            smallest=leftChild;
        }
        let rightChild= this.right(i);
        if(rightChild<len&&this.heap[rightChild]<this.heap[smallest]){
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
let MinHeap= new minHeap();
MinHeap.insert(5)
MinHeap.insert(3)
MinHeap.insert(8)
MinHeap.insert(2)
MinHeap.extract()
console.log(MinHeap.heap)