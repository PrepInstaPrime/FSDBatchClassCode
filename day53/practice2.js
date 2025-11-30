function countVowCons(str){
    str=str.toLowerCase();
    let vowels='aeiou';
    let consonants= "bcdfghjklmnpqrstwxyz"
    let v=0;
    let c=0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            v++;
        }else if(consonants.includes(str[i])){
            c++;
        }
    }
    console.log("Vowels: "+v)
    console.log("Consonants: "+ c)
}
countVowCons("Hey this is FSD class")