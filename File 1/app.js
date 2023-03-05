// Styling Elements

const title = document.querySelector("#main-heading")
// console.log(title)
title.style.color = 'white'

const listItems = document.querySelectorAll(".list-items")
for (let i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = '1.9rem';
    listItems[i].style.color = '#473434'
}

// Creating Elements

// const ul = document.querySelector('ul')
// const li = document.createElement('li')

// Adding Elements

// ul.append(li)

///////////////////////////

// Modifying the text with the help of (innerText, textContent, innerHTML)

// const firstListItem = document.querySelector('.list-items')
// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent)
// console.log(firstListItem.innerHTML)

// li.innerText = "X-men";

// Modifying Attributes & Classes

// li.setAttribute('id', 'main-heading')
// li.removeAttribute('id')

// console.log(title.getAttribute('id'))

// Classes
// li.classList.remove('list-items')

// Remove Elements
// li.remove();

// Traversing the DOM

// Parent Node Traversal

const ul = document.querySelector('ul')
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement)

// Child Node Traversal

// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// ul.childNodes[1].style.backgroundColor = 'blue' //<== Example of how to style single element

// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

// Sibling Node Traversal

const div = document.querySelector('div')
console.log(div.childNodes)

console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)