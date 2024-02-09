class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        console.log(this)
    }

    area() {
        return this.height * this.width;
    }
}

var r = new Rectangle(5, 4);
console.log(r.area())

console.log(typeof (r))


