# codewars : https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript
## Solution
```
function findChildren(dancingBrigade) {
  dancingBrigade=dancingBrigade.split('').sort().join('')
  let map= new Map();
  for(let i=0;i<dancingBrigade.length;i++ ){
    let ascVal=dancingBrigade.charCodeAt(i)
   if(ascVal>=97&&ascVal<=122){
      let mother=String.fromCharCode(ascVal-32);
      let pC=map.get(mother)||"";
      map.set(mother,pC+dancingBrigade[i])
    }
  }
  let res=""
  for(let mother of map.keys()){
    res=res+mother+map.get(mother)
  }
  return res;
}
```
