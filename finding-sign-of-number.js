console.log(Math.sign(7))   // 1
console.log(Math.sign(0))   // 0
console.log(Math.sign(-0))  // -0
console.log(Math.sign(-7))  // -1
console.log(Math.sign(NaN)) // NaN

// es5
// function mathSign (x) {
//     return ((x === 0 || isNaN(x)) ? x : (x > 0 ? 1 : -1))
// }
// console.log(mathSign(7))   // 1
// console.log(mathSign(0))   // 0
// console.log(mathSign(-0))  // -0
// console.log(mathSign(-7))  // -1
// console.log(mathSign(NaN)) // NaN
