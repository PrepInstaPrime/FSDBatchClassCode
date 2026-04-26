function printN(n,m){
    if(n==m){
        console.log(n)
        return;
    }
    console.log(n)
    n++;
    printN(n,m);
}
printN(1,20)