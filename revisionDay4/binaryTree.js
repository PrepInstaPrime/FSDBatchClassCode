class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    levelOrderInsertion(val) {
        let node = new Node(val);
        if (this.root === null) {
            this.root = node;
            return;
        }
        let queue = [];
        queue.push(this.root)
        while (queue.length !== 0) {
            let CNode = queue.shift();
            if (CNode.left == null) {
                CNode.left = node;
                return;
            } else {
                queue.push(CNode.left);
            }
            if (CNode.right == null) {
                CNode.right = node;
                return;
            } else {
                queue.push(CNode.right);
            }
        }
    }
    // BFS 
    bfs() {
        if (this.root === null) {
            console.log("Tree is empty")
            return;
        }
        let queue = [];
        let result = [];
        queue.push(this.root)
        while (queue.length !== 0) {
            let CNode = queue.shift();
            // console.log(CNode.value)
            result.push(CNode.value);
            if (CNode.left != null) {
                queue.push(CNode.left);
            }
            if (CNode.right != null) {
                queue.push(CNode.right);
            }
        }
        console.log(result)
    }
    // NLR
    preOrder(parent) {
        if (parent == null) {
            return;
        }
        console.log(parent.value);
        this.preOrder(parent.left);
        this.preOrder(parent.right);
    }
    // LRN
    postOrder(parent){
        if(parent==null){
            return;
        }
        this.postOrder(parent.left);
        this.postOrder(parent.right);
        console.log(parent.value);
    }
    // LNR
    inOrder(parent){
        if(parent==null){
            return;
        }
        this.inOrder(parent.left);
        console.log(parent.value);
        this.inOrder(parent.right);
    }
    height(parent){
        if(parent==null){
            return 0;
        }
        let left= this.height(parent.left);
        let right= this.height(parent.right);
        return Math.max(left,right)+1;
    }
    diameter(parent){
        let max=0;
        function heightChecker(parent){
         if(parent==null){
            return 0;
         }
        let left= heightChecker(parent.left);
        let right= heightChecker(parent.right);
        max= Math.max(max,left+right);
        return Math.max(left,right)+1;
      }
      heightChecker(parent);
      return max;
    }
}

let tree = new BinaryTree();
tree.levelOrderInsertion(1);
tree.levelOrderInsertion(2);
tree.levelOrderInsertion(3);
tree.levelOrderInsertion(4);
tree.levelOrderInsertion(5);
tree.levelOrderInsertion(6);
// console.log(tree)
// tree.bfs()
// tree.preOrder(tree.root);
// tree.postOrder(tree.root)
tree.inOrder(tree.root)
console.log("Height: "+tree.height(tree.root))
console.log("diameter: "+tree.diameter(tree.root))
