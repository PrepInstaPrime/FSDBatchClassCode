function natural(start, end){
    if(start>end){
        return;
    }
    console.log(start)
    start++;
    natural(start,end)
}
natural(1,5)