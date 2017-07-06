class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

// es5
// var Shape = function (id, x, y) {
//     this.id = id;
//     this.move(x, y);
// };
// Shape.prototype.move = function (x, y) {
//     this.x = x;
//     this.y = y;
// };
