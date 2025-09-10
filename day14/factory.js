// if any function returns an object then it's factory function . it works as template to create object without constructor 
function product(name, price, launch, quantity){
    return{
        Name:name,
        Price:price,
        Launch:launch,
        Quantity:quantity
    }
}
let product1= product("Laptop", "50K", "5/09/2025", 30)
console.log(product1)
let product2= product("Mobile", "40K", "11/09/2025", 20)
console.log(product2)