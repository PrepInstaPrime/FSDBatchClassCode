# Question : 
https://leetcode.com/problems/two-sum/
## Solution 1: 
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
};
```
## Solution 2: 
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        let complement= target-nums[i];
        if(obj.hasOwnProperty(complement)){
            return [obj[complement],i];
        }else{
            obj[nums[i]]=i;
        }
    }
};
```