# Question 1: 
https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
## Solution: 
```
function multipleOfIndex(array) {
  let res=[];
  if(array[0]==0){
    res.push(0)
  }
  for(let i=1;i<array.length;i++){
    if(array[i]%i==0){
      res.push(array[i])
    }
  }
  return res;
  
}
```
# Question 2: 
https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
## Solution: 
```
function toCsvText(array) {
   return array.map(arr=>arr.join(',')).join('\n')
}
```
# Question 3: 
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
## Solution: 
```
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((ele,acc)=>acc+ele,0) + arr2.reduce((ele,acc)=>acc+ele,0); 
}
```
# Question 4: 
https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/train/javascript
## Solution : 
```
function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);;
}
```