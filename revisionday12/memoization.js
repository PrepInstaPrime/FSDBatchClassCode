function fibbo(n,chache=[]){
    if(n==0||n==1){
        return n;
    }
    if(chache[n]!=undefined){
        return chache[n];
    }
    return chache[n]=fibbo(n-1)+fibbo(n-2);
    
}
console.log(fibbo(6))