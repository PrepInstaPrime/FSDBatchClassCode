class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let node = new Node(val);
        if (this.root == null) {
            this.root = node;
            return;
        }
        let queue = [];
        queue.push(this.root);
        while (queue.length != 0) {
            let cNode = queue.shift();
            if (cNode.value > val) {
                if (cNode.left === null) {
                    cNode.left = node;
                    return;
                }
                queue.push(cNode.left);
            }
            if (cNode.value < val) {
                if (cNode.right === null) {
                    cNode.right = node;
                    return;
                }
                queue.push(cNode.right);
            }
        }
    }
    inOrder(parent) {
        if (parent == null) {
            return parent;
        }
        this.inOrder(parent.left);
        console.log(parent.value);
        this.inOrder(parent.right);
    }
}
let tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(4);
tree.insert(6);
console.log(tree)
let arr=[1,2,3,4,5,6];
for(let val of arr){
    tree.insert(val);
}
tree.inOrder(tree.root);