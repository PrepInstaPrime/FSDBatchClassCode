function fibbo(n){
    let store= new Array(n+1).fill(0);
    store[1]=1;
    for(let i=2;i<=n;i++){
        store[i]=store[i-1]+store[i-2];
    }
    return store[n]
}
// tabulation with space optimisation 
function fibbo1(n){
    let n1=0;
    let n2=1;
    for(let i=2;i<n;i++){
        let temp=n1+n2;
        n2=temp;
        n1=n2;
    }
    return n2;
}

console.log(fibbo(6))
console.log(fibbo1(6))