let str="madam"
let start=0;
let end=str.length-1;
let palindrome=true;
while(start<end){
    if(str[start]!=str[end]){
        palindrome=false;
        break;
    }
    start++;
    end--;
}
if(palindrome){
    console.log(true)
}else{
    console.log(false)
}