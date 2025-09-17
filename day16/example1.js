let arr=[[1,2],[3,4]];
// convert array into string 
let str= JSON.stringify(arr); // here str is a string
let copyArr= JSON.parse(str); // deep copy of arr
copyArr[0][1]=5;
console.log(arr)
console.log(copyArr)

// example with object 
let obj={
    name:"Suyash",
    class:"FSD"
}
// let strObj= JSON.stringify(obj);
// let copyObj= JSON.parse(strObj);
let copyObj= JSON.parse(JSON.stringify(obj))
copyObj.name="Ujjawal"
console.log(obj)
console.log(copyObj)