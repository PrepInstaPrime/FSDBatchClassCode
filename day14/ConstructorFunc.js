// constructor functions recieves the values and creates the objects when invoked with new keyword. they are useful when u want to create object dynamically
function mobile(name, price, brand){
    this.Name= name;
    this.Price = price;
    this.Brand= brand;
}

let mobile1= new mobile("Samsung", 100000, "S23 utlra")
let mobile2 = new mobile("Iphone",80000,"Iphone 15")
console.log(mobile1)
console.log(mobile2)