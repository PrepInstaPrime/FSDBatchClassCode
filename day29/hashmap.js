let map = new Map(); // creating hashmap
map.set("chocolate", 10); // adding value 
map.set("chips", 5)
map.set("coldDrinks", 10)
console.log(map) // printing 
console.log(map.get("chips"))
console.log(map.has("coldDrinks"))
map.delete("chips")
console.log(map)
console.log(map.size)
map.clear()
console.log(map)

