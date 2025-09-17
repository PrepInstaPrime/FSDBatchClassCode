let date= new Date();
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.toDateString())
// milliseconds from 1 jan 1970 till now
console.log(Date.now())

// update date
date.setFullYear("2024");
date.setMonth("10")
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.toDateString())
// console.log(date.toISOString())
