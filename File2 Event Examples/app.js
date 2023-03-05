// Reveal Event

const revealBtn = document.querySelector('.reveal-btn')
const hiddenContent = document.querySelector(".hidden-content")

function showContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', showContent)

// The above Example can be use for toggling the menu and for navbar hamburger.

// Event Propagation

window.addEventListener('click', function () {
    console.log("Window")
})

document.addEventListener('click', function () {
    console.log("Document")
})

document.querySelector(".div-1").addEventListener("click", function (e) {
    e.stopPropagation()
    console.log("div1")
})

document.querySelector('div-2').addEventListener("click", function () {
    console.log("div2")
})

document.querySelector(".btn").addEventListener('click', function (e) {
    console.log(e.target.innerText = "Clicked")
})