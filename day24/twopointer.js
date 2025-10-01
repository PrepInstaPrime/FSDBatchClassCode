let arr=[1,2,3,4,5,6,7,8,9,10]; // size of array will be 1<=size<=n. , n=2^31+1
// two pointer
let start=0;
let end=arr.length-1;
while(start<end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr)

/*
// brute force
let res=[]
for(let end=arr.length-1;end>=0;end--){
    res.push(arr[end])
}
console.log(res)
*/