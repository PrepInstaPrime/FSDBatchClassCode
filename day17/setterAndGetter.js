// getter are used to get values without revealing the actual keys
let obj = {
    fname: "Shantanu",
    lname: "Pratap",
    age: 19,
    get fullname() {
        return this.fname + " " + this.lname
    },
    set setFirstName(newFname){
        this.fname=newFname
    }
}
console.log(obj.fullname)
// console.log(obj.fname)
obj.setFirstName="Raju"
console.log(obj.fullname)
// getter and setter are used to securely access and update the properties of the object 