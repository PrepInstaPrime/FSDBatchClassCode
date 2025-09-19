// let objName= new Promise(callback function)
let promise = new Promise((resolve, reject) => {
    let marks = 91;
    if (marks >= 92) {
        setTimeout(() => {
            resolve("Your new Laptop")
        }, 2000)
    } else {
        setTimeout(() => {
            reject("Pitashree award")
        }, 2000)

    }
});
// how to use promise
// console.log(promise)
promise.then((msg) => console.log(msg)).catch((err) => console.log(err))
