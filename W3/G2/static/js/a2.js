// let a = 2;
// let b = '2';
//
// if (a === b) {
//     console.log('equal')
// } else {
//     console.log('not equal')
// }


a = [1, 2, 3, 4]
// Loop 1
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i])
//     const num = 10
// }
//
// console.log(i)
// console.log(num)


// function area() {
//
// }


// Loop 2
// for (const num of a) {
//     console.log(num)
// }


// Loop 3

function showNumber(number) { // named function
    console.log(number)
}

// a.forEach(function (number) { // anonymous function
//     console.log(number)
// })

a.forEach(showNumber)


a.forEach((number, index) => console.log(number)) // arrow function

