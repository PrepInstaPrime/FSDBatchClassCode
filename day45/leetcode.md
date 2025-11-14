# Question 1: 
https://leetcode.com/problems/reverse-integer/
## Solution: 
```
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg=false;
    let rev=0;
    if(x<0){
        x=x*(-1);
        neg=true;
    }
    while(x>0){
       let lastDigit=x%10;
       rev=rev*10+lastDigit;
       if(rev>Math.pow(2,31)-1){
        return 0;
       }
       x=Math.floor(x/10) 
    }
    return neg?rev*(-1):rev;
};
```