# Question 1
https://leetcode.com/problems/invert-binary-tree/description/ 
## Solution: 
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invert=(node)=>{
    if(node==null){
        return ;
    }
    let temp=node.left;
    node.left=node.right;
    node.right=temp;
    invert(node.left);
    invert(node.right);
}
var invertTree = function(root) {
    invert(root);
    return root;
};
```
# Question 2: 
https://leetcode.com/problems/symmetric-tree/description/
## Solution: 
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function checkMirror(n1, n2){
    if(n1==null&&n2==null){
        return true;
    }
    if(n1==null||n2==null){
        return false;
    }
    if(n1.val!=n2.val){
        return false;
    }
    return checkMirror(n1.left,n2.right)&&checkMirror(n1.right,n2.left);
}
var isSymmetric = function(root) {
    return checkMirror(root.left,root.right);
};
```

# Question 3: 
https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
## Solution: 
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 function height(root){
    if(root==null){
        return 0;
    }
    return 1+Math.max(height(root.left), height(root.right));
 }
var maxDepth = function(root) {
    return height(root)
};
```
# Question 4: 
https://leetcode.com/problems/same-tree/description/
## Solution: 
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p==null&&q==null){
        return true;
    }
    if(p==null||q==null){
        return false;
    }
    if(p.val!=q.val){
        return false;
    }
    return isSameTree(p.left, q.left)&&isSameTree(p.right, q.right)
};
```