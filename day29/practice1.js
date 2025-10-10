// you are given a para , find the most repeated word
// ex: "hey team we are hard working matlab when bhavesh comes matlab he is very dedicated matlab. when i see him matlab very dedicated "
// output : matlab
let str = "hey team we are hard working matlab when bhavesh comes matlab he is very dedicated matlab . when i see him matlab very dedicated"
let arr = str.split(" ");
let freq = new Map();
for (let i = 0; i < arr.length; i++) {
    if (freq.has(arr[i])) {
        freq.set(arr[i], freq.get(arr[i]) + 1);
    } else {
        freq.set(arr[i], 1)
    }
}
let word = ""
let frequency = 0;
for (let keyValye of freq) {
     let key=keyValye[0]
    if (freq.get(key) > frequency) {
        word = key
        frequency = freq.get(key)
    }
}
console.log(word)