class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        let node= new Node(data);
        if(this.head==null){
            this.head=node;
            return;
        }
        let temp= this.head;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=node;
    }
    addAtPosition(position, data){
        let node= new Node(data);
        let count=1;
        let temp=this.head;
        while(temp!=null&&count<position-1){
            temp= temp.next;
            count++;
        }
        if(temp==null){
            console.log("Position does not exist")
            return;
        }
        node.next=temp.next;
        temp.next=node;
    }
    display(){
        let temp= this.head;
        let res=""
        while(temp!=null){
            res= res+temp.data+"->"
            // console.log(temp.data+"->")
            temp= temp.next;
        }
        console.log(res+null)
    }
    delete(data){
        if(this.head.data==data){
            this.head=this.head.next;
            return;
        }
        let temp= this.head;
        while(temp.next!=null&&temp.next.data!=data){
            temp= temp.next;
        }
        if(temp.next==null){
            console.log("Data not found");
            return;
        }
        temp.next= temp.next.next;
    }
}
let list= new LinkedList();
list.append(1)
list.append(2)
list.addAtPosition(2,3)
list.append(4)
// console.log(list)
list.display()
list.delete(3)
list.display()