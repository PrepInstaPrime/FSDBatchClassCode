// write a program to remove all the duplicates from an array
// ex: arr[1,2,3,1,2,3,2,3,2,3]
// output : [1,2,3]
let arr=[1,2,3,1,2,3,2,3,2,3]
let set= new Set()
// adding values in set ( it will ignore repeated values )
for(let val of arr){
    set.add(val) // {1,2,3}
}
let res=[]
// now pushing back values into res array
for(let val of set){
    res.push(val)
}
console.log(res)
