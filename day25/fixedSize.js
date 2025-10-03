function maxSum(arr, k){
    let sum=0;
    // find the sum of first k element
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    let maxS=sum;
    for(let i=k;i<arr.length;i++ ){
       sum=sum-arr[i-k]+i;
       maxS=Math.max(sum,maxS);
    }
    // return sum;
    console.log("Max: "+maxS)
}
let arr=[6,9,3,8,4,-1,-6,9,9,8]
let k=3
maxSum(arr,k)
// console.log(maxSum(arr,k))