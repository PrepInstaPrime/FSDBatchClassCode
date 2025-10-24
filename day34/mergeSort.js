function merge(start, mid, end, arr) {
    let lStart = start;
    let rStart = mid + 1;
    let k = 0;
    let temp = new Array(end - start + 1);
    temp.fill(0)
    while (lStart <= mid && rStart <= end) {
        if (arr[lStart] < arr[rStart]) {
            temp[k] = arr[lStart];
            k++;
            lStart++;
        } else {
            temp[k] = arr[rStart]
            k++;
            rStart++;
        }
    }
    while (lStart <= mid) {
        temp[k] = arr[lStart];
        k++;
        lStart++;
    }
    while (rStart <= end) {
        temp[k] = arr[rStart]
        k++;
        rStart++;
    }
    for (let m = 0; m < temp.length; m++) {
        arr[start + m] = temp[m]
    }
}
function divide(start, end, arr) {
    if (start >= end) {
        return;
    }
    let mid = Math.floor(start + (end - start) / 2);
    divide(start, mid, arr); // left array
    divide(mid + 1, end, arr) // right array
    merge(start, mid, end, arr) // merge the array
}
let arr = [4, 5, 3, 2, 1]
let start = 0;
let end = arr.length - 1
console.log(`Array before sorting: ${arr}`)
divide(start, end, arr)
console.log(`Array after sorting: ${arr}`)

