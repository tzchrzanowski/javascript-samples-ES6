function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50

// es5
// function f (x, y, z) {
//     if (y === undefined)
//         y = 7;
//     if (z === undefined)
//         z = 42;
//     return x + y + z;
// };
// f(1) === 50;
