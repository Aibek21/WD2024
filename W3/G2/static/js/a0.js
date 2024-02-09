// console.log(document)


let title = document.getElementById('title');
console.log(title)
console.log(title.innerText)
console.log(title.innerHTML)

title.style.color = 'red'
title.style.fontSize = '15px'


let container = document.getElementsByClassName('container')[0]
console.log(container)
console.log(container.innerHTML)
console.log(container.innerText)


// setTimeout(myFunc, 5 * 1000);
// setInterval(myFunc, 2 * 1000);

function myFunc() {
    let p = document.createElement('p');
    p.innerText = 'Paragraph'
    p.style.fontSize = '20px'
    p.style.color = 'blue'


    container.appendChild(p)
}


function showMessage() {
    console.log('h1 clicked');
}
