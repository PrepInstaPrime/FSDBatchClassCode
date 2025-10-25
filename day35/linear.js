function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return `${target} found on ${i} index`
        }
    }
    return `Element not found`
}
let arr = [9, 1, 3, 5, 2, 8, 7,5, 4, 6]
let target = 5;
console.log(linearSearch(arr, target))