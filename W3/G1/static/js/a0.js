let text = document.getElementById('title')

console.log(text)
console.log(text.innerText)
console.log(text.innerHTML)

text.style.color = 'red'
text.style.fontSize = '10px'


let container = document.getElementsByClassName('container')[0]

console.log(container.innerHTML)

let p = document.createElement('p')
p.innerText = 'Hello world'
p.style.color = 'blue'
p.style.fontSize = '20px'

container.appendChild(p)


function showMessage() {
    console.log('h1 clicked')
}