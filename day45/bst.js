class Node {
    constructor(val) {
        this.left = null;
        this.val = val;
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
        let currentNode = this.root;
        while (true) {
            if (val == currentNode.val) {
                return;
            }
            if (val < currentNode.val) {
                if (currentNode.left == null) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            }
            if (val > currentNode.val) {
                if (currentNode.right == null) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
    printData(node) {
        let res = ""
        function inorder(parent) {
            if (parent == null) {
                return;
            }
            inorder(parent.left)
            // console.log(parent.val)
            res = res + " " + parent.val
            inorder(parent.right)
        }
        inorder(node)
        console.log(res)
    }
    search(val){
        if(this.root==null){
            console.log("tree is empty")
            return;
        }
        let currentNode= this.root;
        while(currentNode!=null){
            if(currentNode.val==val){
                console.log("true")
                return;
            }
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            }
            if (val > currentNode.val) {
                currentNode = currentNode.right;
            }
        }
        console.log("value not found")
    }

}
let tree = new BST();
tree.insert(10)
tree.insert(7)
tree.insert(9)
tree.insert(15)
tree.insert(4)
tree.insert(5)
// tree.inorder(tree.root)
tree.printData(tree.root)
// tree.search(15)
tree.search(30)