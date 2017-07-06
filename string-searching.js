"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false

// es5
// "hello".indexOf("ello") === 1;    // true
// "hello".indexOf("hell") === (4 - "hell".length); // true
// "hello".indexOf("ell") !== -1;    // true
// "hello".indexOf("ell", 1) !== -1; // true
// "hello".indexOf("ell", 2) !== -1; // false
