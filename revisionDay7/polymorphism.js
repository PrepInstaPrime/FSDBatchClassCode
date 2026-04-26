class Poly{
    calculate(a,b){
        console.log("from parent")
        return a+b;
    }
}
class Child extends Poly{
    // method overridding
  calculate(a,b){
        console.log("from Child")
        return a+b;
    }
}
let obj= new Poly();
console.log(obj.calculate(2,5));
let obj1= new Child();
console.log(obj1.calculate(4,5))
