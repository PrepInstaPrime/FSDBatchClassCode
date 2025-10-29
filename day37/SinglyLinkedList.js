class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
    }
    add(data){
        let node= new Node(data);
        if(this.head==null){
            this.head=node;
            return;
        }
        let temp=this.head;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=node;
    }
}
let list= new SinglyLinkedList();
list.add(1)
list.add(2)
list.add(3)
console.log(list)