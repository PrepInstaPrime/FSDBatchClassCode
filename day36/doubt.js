function countZeroRowsAndColumns(arr1,arr2){
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
       arr1[i][j]=arr1[i][j]+arr2[i][j];
    }
  }
  let count=0;
  for(let i=0;i<arr1.length;i++){
    let sum=0;
    for(let j=0;j<arr1[i].length;j++){
       sum+=arr1[i][j];
    }
    if(sum==0){
      count++;
    }
  }
  for(let i=0;i<arr1[0].length;i++){
    let sum=0;
    for(let j=0;j<arr1.length;j++){
       sum+=arr1[j][i];
    }
    if(sum==0){
      count++;
    }
  }
  return count;
  
}
let arr1=[[1,3,-5],[2,-4,6]]
let arr2=[[-1,-3,5],[-2,-4,-6]]
console.log(countZeroRowsAndColumns(arr1,arr2))