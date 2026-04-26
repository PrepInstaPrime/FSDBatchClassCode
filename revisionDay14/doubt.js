// Write a function that takes an array of integers and returns a new array with all duplicate elements removed. The order of elements in the resulting array should be the same as their first occurrence in the input array.

let freq= {}
let arr=[9,3,3,1,2,4,4,6,7];
for(let val of arr){
    if(!freq[val]){
        freq[val]=1;
    }else{
        freq[val]=freq[val]+1;
    }
}
// console.log(freq)
let res=[];
for(let val of arr){
    if(freq[val]==1){
        res.push(val);
    }
}
console.log(res)

