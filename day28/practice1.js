// check if two strings are anagram
function checkAnagram(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    let arr1=[];
    let arr2=[];
    for(let i=0;i<26;i++){
        arr1[i]=0
        arr2[i]=0
    }
    for(let i=0;i<str1.length;i++){
        let idx1= str1.charCodeAt(i)-97;
        let idx2= str2.charCodeAt(i)-97;
        arr1[idx1]++;
        arr2[idx2]++;
    }
    for(let i=0;i<26;i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
}
console.log(checkAnagram("racee","care"))