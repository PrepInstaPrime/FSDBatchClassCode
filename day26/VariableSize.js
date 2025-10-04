function maxWindow(arr, target){
    let left=0;
    let sum=0;
    let maxWin=0;
    for(let right=0;right<arr.length;right++){
        sum+= arr[right];
        while(sum>target){
            sum-=arr[left];
            left++;
        }
        if(sum==target){
            let newWindow=right-left+1;
            maxWin= Math.max(maxWin,newWindow);
        }
       
    }
    console.log(maxWin);
}
let arr=[2,3,4,5,1,1,1,1,5];
let target=5;
maxWindow(arr,target)