function reverse(str){
    let start=0;
    let end= str.length-1;
    let arr= str.split('');
    while(start<end){
        let temp= arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    return arr.join('')
}
console.log(reverse("hello class"))