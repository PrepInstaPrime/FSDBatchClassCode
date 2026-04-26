class OOPs{
     name="mohan"
     age=20
     experience="5 Years"
}
class Parent{
    intro(){
        console.log("this is parent class")
    }
    money =1000000
}
// inheritance
class Child extends Parent{
    myMoney=10000
    wealth(){
        console.log(this.money+this.myMoney)
    }
}
let obj = new OOPs();
obj.name="Ameen"
console.log(obj.name)
let obj1= new Child();
console.log(obj1.myMoney)
obj1.wealth()
obj1.intro()
