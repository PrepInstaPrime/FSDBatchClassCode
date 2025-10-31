class Node{
    constructor(data){
        this.prev=null;
        this.data=data;
        this.next=null;
    }
}
class doublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    append(data){
        let node= new Node(data);
        if(this.head==null){
            this.head=node;
            this.tail=node;
            return;
        }
        node.prev=this.tail;
        this.tail.next=node;
        this.tail= node;
    }
    display(){
        let res="null<-"
        let temp=this.head;
        while(temp!=null){
            res=res+temp.data+"->";
            temp=temp.next;
        }
        console.log(res+"null")
    }
}

let list= new doublyLinkedList();
list.append(1)
list.append(2)
list.append(3)
list.display()