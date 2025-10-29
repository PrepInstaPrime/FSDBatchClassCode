class Intro{
    constructor(name){
        console.log(`Hey ${name}`)
        this.Name=name;
    }
    updateName(newName){
        this.Name=newName
    }
    myself(){
        console.log(`hey my name is ${this.Name}`)
    }
    job(){
        console.log("I work as Department head for Adda education ")
    }
}
let user= new Intro("Gaurav Pandey")
console.log(user)
user.myself()
user.updateName("Vijay")
user.myself()
// user.job()
