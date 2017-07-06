let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2
s.has("hello") === true
for (let key of s.values()) // insertion order
    console.log(key)
    

// es5
// var s = {};
// s["hello"] = true; s["goodbye"] = true; s["hello"] = true;
// Object.keys(s).length === 2;
// s["hello"] === true;
// for (var key in s) // arbitrary order
//     if (s.hasOwnProperty(key))
//         console.log(s[key]);
