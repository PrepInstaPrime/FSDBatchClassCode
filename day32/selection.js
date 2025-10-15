function selection(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let small=i;
        for(let j=i+1;j<n;j++){
            if(arr[small]>arr[j]){
                small=j;
            }
        }
        let temp=arr[small]
        arr[small]=arr[i]
        arr[i]=temp
    }
}
let arr=[6,5,5,4,3,2,1]
console.log(`Array before sorting: ${arr}`)
selection(arr)
console.log(`Array after sorting : ${arr}`)