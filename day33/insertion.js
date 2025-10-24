function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i-1; // index of last element of sorted part
        let key=arr[i] // first value of unsorted part 
        while(j>=0&&key<arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }
}
let arr=[3,6,4,9,1,2]
console.log(`Before sorting : ${arr}`)
insertionSort(arr)
console.log(`After sorting : ${arr}`)