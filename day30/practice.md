# Question 1: 
https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
## Solution 
```
const flip=(d, a)=>{
  if(d==='R'){
    return a.sort((a,b)=>a-b);
  }
  return a.sort((a,b)=>b-a);
}
```

# Question 2: 
https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
## Solution
```
function warnTheSheep(queue) {
  let lastAnimal= queue[queue.length-1];
  if(lastAnimal==='wolf'){
    return "Pls go away and stop eating my sheep";
  }
  else{
    let wolfIdx=queue.indexOf("wolf");
    return `Oi! Sheep number ${queue.length-1-wolfIdx}! You are about to be eaten by a wolf!`;
  }
}
```

# Question 3: 
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
## Solution: 
```
function sumOfDifferences(arr) {
  if(arr.legnth<=1){
    return 0;
  }
  let sum=0;
  arr.sort((a,b)=>b-a)
  for(let i=0;i<=arr.length-2;i++){
    sum+=arr[i]-arr[i+1]
  }
  return sum;
}
```
# Home Work
- https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript