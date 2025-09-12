console.log(a) // a is hoisted
var a = 5;
add(5, 6) // functions are hoisted
function add(a, b) {
    console.log(a + b)
}
