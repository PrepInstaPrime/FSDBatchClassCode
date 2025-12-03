# Question: 
https://leetcode.com/problems/move-zeroes/
## Solution: 
```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start=0;
    for(let end=0;end<nums.length;end++){
        if(nums[end]!=0){
            nums[start]=nums[end];
            start++;
        }
    }
    for(let i=start;i<nums.length;i++){
        nums[i]=0;
    }
};
```
# Question: 
https://leetcode.com/problems/sort-colors/description/
## Solution: 
```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start=0;
    let end=nums.length-1;
    let mid=0;
    while(mid<=end){
        if(nums[mid]==2){
            let temp=nums[end];
            nums[end]=nums[mid];
            nums[mid]=temp;
            end--;
        }else if(nums[mid]==0){
            let temp=nums[mid];
            nums[mid]=nums[start];
            nums[start]=temp;
            mid++;
            start++;
        }else{
            mid++;
        }
    }
};
```