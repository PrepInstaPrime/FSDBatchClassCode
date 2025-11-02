# Question : 
https://www.codewars.com/kata/584425e1101928a1bc00003b/train/javascript
## Solution : 
```
function countZeroRowsAndColumns(arr1,arr2){
  let rows= arr1.length;
  let cols=arr1[0].length;
  let rowArrNotZero=[];
  let colsArrNotZero=[];
  let rowsNotZero=0;
  let colsNotZero=0;
  for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
      let sum=arr1[i][j]+arr2[i][j];
      if(sum!=0){
        rowArrNotZero[i]=1;
        colsArrNotZero[j]=1;
      }
    }
  }
  for(let i=0;i<rows;i++){
    if(rowArrNotZero[i]!=null){
      rowsNotZero++;
    }
  }
  for(let j=0;j<cols;j++){
    if(colsArrNotZero[j]!=null){
      colsNotZero++;
    }
  }
  return rows-rowsNotZero+cols-colsNotZero;
}
```