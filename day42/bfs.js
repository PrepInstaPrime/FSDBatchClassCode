class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree{
    constructor(){
        this.root=null;
    }
    insert(val){
        let node= new Node(val);
        if(this.root==null){
            this.root=node;
            return;
        }
        let queue=[]
        queue.push(this.root);
        while(queue.length>0){
            let currentNode=queue.shift();
            if(currentNode.left==null){
                currentNode.left=node;
                return;
            }else{
                queue.push(currentNode.left)
            }
            if(currentNode.right==null){
                currentNode.right=node;
                return;
            }else{
                queue.push(currentNode.right)
            }
        }
    }
    // DFS method
    inorder(parent){
        if(parent==null){
            return;
        }
        this.inorder(parent.left)
        console.log(parent.val)
        this.inorder(parent.right)
    }
    // bfs/level order traversal
    bfs(){
        if(this.root==null){
            console.log("tree is empty");
            return;
        }
        let queue=[]
        queue.push(this.root);
        let res=""
        while(queue.length>0){
            let currentNode= queue.shift();
            // console.log(currentNode.val);
            res=res+" "+currentNode.val
            if(currentNode.left!=null){
                queue.push(currentNode.left)
            }
            if(currentNode.right!=null){
                queue.push(currentNode.right)
            }
        }
        console.log(res)
    }
}
let tree= new BinaryTree();
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
tree.insert(6)
// tree.inorder(tree.root)
tree.bfs()