function maxProduct(n, nums){
    let maxP=nums[0];
    let totalP=nums[0];
    for(let i=1;i<n;i++){
        if(totalP==0){
            totalP=1;
        }
        totalP=totalP*nums[i];
        maxP=Math.max(maxP,totalP);
    }
    return maxP;
}
let n=5;
let nums=[6,-3,-10,0,200]
console.log(maxProduct(n,nums))