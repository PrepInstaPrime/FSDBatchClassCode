// const prompt= require('prompt-sync')();
// // only lowercase alphabates without space
// let str= prompt("Enter your string: ");
let str="abcabcdefe"
let arr=[];
for(let i=0;i<26;i++){
    arr[i]=0;
}
console.log("Our String: "+str)
for(let i=0;i<str.length;i++){
    let idx=str.charCodeAt(i)-97; // a=0, z=25
    arr[idx]++;
}
for(let i=0;i<26;i++){
    if(arr[i]!=0){
        console.log(`${String.fromCharCode(i+97)} : ${arr[i]}`)
    }
}
