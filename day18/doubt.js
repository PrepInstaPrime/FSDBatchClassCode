let arr = [1, 2, 3, 4]
console.log(arr.toString())
console.log(arr.join("hey"))

// splice( startIndex, no. of elements to be deleted, elements to be added)
arr.splice(1, 2, 9, 8)
console.log(arr)
arr.splice(1, 1, "*")
console.log(arr)
arr.splice(2, 0, "*")
console.log(arr)

// 