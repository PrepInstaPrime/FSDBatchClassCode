function findEquilibrium(n, nums){
  let totalSum=0;
  for(let val of nums){
        totalSum+=val;
  }
  let leftSum=0;
  for(let i=0;i<n;i++){
    totalSum=totalSum-nums[i];
    if(totalSum==leftSum){
        return i;
    }
    leftSum+=nums[i];
  }
  return -1;
}
let n=7;
let nums=[-7,1,5,2,-4,3,0]
console.log(findEquilibrium(n,nums))