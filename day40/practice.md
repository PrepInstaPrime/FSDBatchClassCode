# Question: 
https://leetcode.com/problems/reverse-linked-list/description/
## Solution 
```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let res=null;
    while(head!=null){
        let temp= head;
        head= head.next;
        temp.next=res;
        res=temp;
    }
    return res;
};
```