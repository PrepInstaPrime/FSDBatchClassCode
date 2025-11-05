class Node{
    constructor(val){
        this.left=null;
        this.right=null;
        this.val=val;
    }
}
class BinaryTree{
    constructor(){
        this.root=null;
    }
    levelOrderInsertion(val){
        let node= new Node(val);
        if(this.root==null){
            this.root=node;
            return;
        }
        let queue=[];
        queue.push(this.root);
        while(queue.length!=0){
            let cNode= queue.shift();
            if(cNode.left==null){
                cNode.left=node;
                return;
            }else{
                queue.push(cNode.left)
            }
            if(cNode.right==null){
                cNode.right=node;
                return;
            }else{
                queue.push(cNode.right)
            }
        }
    }

    // traversal : iteration 
    inorder(parent){
        if(parent==null){
            return;
        }
        this.inorder(parent.left)
        console.log(parent.val)
        this.inorder(parent.right)
    }
    preOrder(parent){
        if(parent==null){
            return;
        }
        console.log(parent.val)
        this.preOrder(parent.left)
        this.preOrder(parent.right)
    }
    postOrder(parent){
        if(parent==null){
            return;
        }
        this.postOrder(parent.left)
        this.postOrder(parent.right)
        console.log(parent.val)
    }

}
let tree= new BinaryTree();
tree.levelOrderInsertion(1)
tree.levelOrderInsertion(2)
tree.levelOrderInsertion(3)
tree.levelOrderInsertion(4)
tree.levelOrderInsertion(5)
tree.levelOrderInsertion(6)
tree.levelOrderInsertion(7)
// tree.inorder(tree.root)
// tree.preOrder(tree.root)
tree.postOrder(tree.root)