function countFreq(n,nums){
    let obj={};
    for(let i=0;i<n;i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]]++;
        }else{
            obj[nums[i]]=1;
        }
    }
    let arr=Object.entries(obj);
    arr.sort((a,b)=>a[0]-b[0]);
    // console.log(arr)
    // console.log(obj)
    for(let i=0;i<arr.length;i++){
        console.log(arr[i][0]+" "+arr[i][1]);
    }
}
let n=7;
let nums=[104,102,101,103,101,102,101]
countFreq(n,nums)