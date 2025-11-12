class Node{
    constructor(val){
        this.left=null;
        this.val=val;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(val){
        let node= new Node(val);
        if(this.root==null){
            this.root=node;
            return;
        }
        let currentNode=this.root;
        while(true){
            if(val==currentNode.val){
                return;
            }
            if(val<currentNode.val){
                if(currentNode.left==null){
                    currentNode.left=node;
                    return;
                }
                currentNode=currentNode.left;
            }
            if(val>currentNode.val){
                if(currentNode.right==null){
                    currentNode.right=node;
                    return;
                }
                currentNode=currentNode.right;
            }
        }
    }
    inorder(parent){
        if(parent==null){
            return;
        }
        this.inorder(parent.left)
        console.log(parent.val)
        this.inorder(parent.right)
    }
}
let tree= new BST();
tree.insert(10)
tree.insert(7)
tree.insert(9)
tree.insert(15)
tree.insert(4)
tree.insert(5)
tree.inorder(tree.root)