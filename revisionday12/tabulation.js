function fibbo(n){
    let chache=new Array(n+1).fill(0);
    chache[1]=1;
    for(let i=2;i<=n;i++){
        chache[i]=chache[i-1]+chache[i-2];
    }
    return chache[n];
}
console.log(fibbo(6))