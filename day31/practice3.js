function fibbo(a,b,range){
    if(range<=0){
        return;
    }
    console.log(a)
    let c=a+b;
    a=b;
    b=c;
    range--;
    fibbo(a,b,range)
}
fibbo(0,1,8)