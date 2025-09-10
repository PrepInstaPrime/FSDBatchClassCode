let marks = [38, 27, 30, 25, 80, "hello", true, "A", null, "+-*"]
// console.log(marks[0])
// console.log(marks[5])
// console.log(marks.length)
/*
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}
*/

for(let val of marks){
    console.log(typeof val)
    console.log(val)
}