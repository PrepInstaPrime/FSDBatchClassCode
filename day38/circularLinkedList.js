class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class singlyCircular{
    constructor(){
        this.head=null;
    }
    append(data){
        let node= new Node(data);
        if(this.head==null){
            this.head=node;
            node.next=this.head;
            return;
        }
        let temp= this.head;
        while(temp.next!=this.head){
            temp=temp.next;
        }
        temp.next=node;
        node.next=this.head;
    }
    display(){
        let temp=this.head;
        let res=""
        while(temp.next!=this.head){
            res=res+temp.data+"->"
            temp=temp.next;
        }
        console.log(res+temp.data+"->head")
    }
}
let list= new singlyCircular();
list.append(1)
list.append(2)
list.append(3)
list.display()