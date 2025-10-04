# problem: 
https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
# Solution 
```
function points(games) {
  let points=0;
  for(let i=0;i<games.length;i++){
     let str=games[i];
     let x= str[0]-'0';
     let y=str[2]-'0';
    if(x>y){
      points+=3;
    }
    if(x===y){
      points+=1;
    }
  }
  return points;
}
```
