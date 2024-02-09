// let a = 2;
// let b = '2';
//
// if (a === b) {
//     console.log('equal')
// } else {
//     console.log('not equal')
// }


let a = [1, 2, 3, 4]

// Loop 1
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i])
// }
//
// console.log(i)

// function testVar() {
//     var num = 0;
//     console.log(num)
//     console.log(a)
// }
//
// testVar()
// console.log(num)


// Loop 2
// for (const num of a) {
//     console.log(num)
// }


// Loop 3
// a.forEach(function (num) { // anonymous function
//     console.log(num)
// })

function showMessage(num) { // named function
    console.log(num)
}

b = showMessage
console.log(typeof (b))

a.forEach(b)

// a.forEach((num) => console.log(num)) // arrow function





