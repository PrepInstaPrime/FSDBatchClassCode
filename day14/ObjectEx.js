let mobile={
    name:"Samsung",
    price:50000,
    model : "S23"
}
// console.log(mobile.name)
// console.log(mobile.price)
// what if i want to access all the keys 
// for in loop
for ( let key in mobile){
    console.log(key +" : " +mobile[key]) // mobile."name"
    mobile[key] = "mobile "+mobile[key]

}
console.log(mobile)