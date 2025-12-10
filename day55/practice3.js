function rotate(n,k,nums){
    for(let i=0;i<k;i++ ){
        let ele=nums.shift();
        nums.push(ele)
    }
    return nums;
}
console.log(rotate(5,2,[10,20,30 ,40 ,50] ))