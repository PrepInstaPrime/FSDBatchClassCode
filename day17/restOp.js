// rest : ... (tripal dot) it will be applied to value
function add(...a){
    // console.log(a+b)
    console.log(a)
    // let sum=a.reduce((val,acc)=>val+acc,0)
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    console.log(sum)
}
add(2,3,4,9,5,9,11)