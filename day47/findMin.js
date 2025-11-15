let prompt= require("prompt-sync")();
function findMin(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min;
}
let n=parseInt(prompt());
let arr=[]
for(let i=0;i<n;i++){
    arr.push(parseInt(prompt()));
}
console.log(findMin(arr))