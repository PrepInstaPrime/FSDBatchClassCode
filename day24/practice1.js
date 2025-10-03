let str= "Hello"
let arr=str.split(""); // ['H','e', 'l', 'l','o']
let start=0;
let end=arr.length-1;
while(start<end){
    let temp= arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr.join(""))
