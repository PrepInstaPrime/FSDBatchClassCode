function maxSum(arr, k){
    let sum=0;
    let maxS=-Infinity;
    for(let i=0;i<=arr.length-k;i++ ){
        for(let j=i;j<k+i;j++){ // 1,2,3
             sum+=arr[j];
        }
        console.log(sum)
        maxS=Math.max(maxS,sum);
        sum=0;
    }
    // return sum;
    console.log("Max: "+maxS)
}
let arr=[6,9,3,8,4,-1,-6,9,9,8]
let k=3
maxSum(arr,k)
// console.log(maxSum(arr,k))