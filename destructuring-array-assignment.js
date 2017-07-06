var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]

// es5
// var list = [ 1, 2, 3 ];
// var a = list[0], b = list[2];
// var tmp = a; a = b; b = tmp;
