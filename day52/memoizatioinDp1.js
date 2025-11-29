function fibbo(n, store={}){
    if(n<=1) {
        return n;
    }
    if(store[n]!==undefined){
        return store[n];
    }
    store[n]=fibbo(n-1,store)+fibbo(n-2,store)
    return store[n]
}
console.log(fibbo(6))