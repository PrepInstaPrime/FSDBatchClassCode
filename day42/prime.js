// write a js program to check where a number is prime or not
function checkPrime(n){
    if(n<=1){
        return false;
    }
    if(n==2){
        return true;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(1))
// write a js program to print n consecutive numbers 
function printCosecutive(n){
    for(let i=4;i<=n;i++){
        if(!checkPrime(i)){
            console.log(i);
        }
    }
}
printCosecutive(10)