# Question : 
https://leetcode.com/problems/add-digits/
## Solution 1: 
```
/**
 * @param {number} num
 * @return {number}
 */
function Sum(val){
    let sum=0;
    while(val>0){
        let lastDigit=val%10;
        sum=sum+lastDigit;
        val=Math.floor(val/10);
    }
    return sum;
}
var addDigits = function(num) {
    while(num>9){
        num=Sum(num);
    }
    return num;
};
```

## Solution 2:
```
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num==0){
        return 0;
    }
    if(num%9==0){
        return 9;
    }
    return num%9;
};
``` 
# Question : 
https://leetcode.com/problems/valid-parentheses/
## Solution : 
```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj={
        '(':')',
        '{':'}',
        '[':']'
    }
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(obj.hasOwnProperty(s[i])){
            stack.push(s[i]);
        }else{
            if(stack.length>0){
                let top=stack.pop()
                if(obj[top]!==s[i]){
                    return false;
                }
            }
            else{
                return false;
            }
        }
    }
    return true&&stack.length==0;
};
```