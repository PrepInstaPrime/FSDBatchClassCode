// logic 1
/*
function findMissing(arr){
    let freq= new Map();
    for(let i=0;i<arr.length;i++){
        if(freq.has(arr[i])){
            freq.set(arr[i], freq.get(arr[i])+1);
        }else{
            freq.set(arr[i],1)
        }
    }
    for(let i=1;i<=arr.length;i++){
        if(!freq.has(i)){
            return i;
        }
    }
}
*/
function findMissing(arr){
    let set= new Set();
    for(let i=0;i<arr.length;i++){
       set.add(arr[i]);
    }
    let setSum=0;
    for(let val of set){
        setSum+=val;
    }
    let n= arr.length;
    let expectedSum= n*(n+1)/2;
    return expectedSum-setSum;
}

let arr=[1,3,2,4,5,7,6,6];
console.log(findMissing(arr))