const openBtn = document.querySelector("#open-btn")
const modalContainer = document.querySelector("#modal-container")
const closeBtn = document.querySelector("#close-btn")

openBtn.addEventListener('click', function() {
    modalContainer.style.display = "block"
})

closeBtn.addEventListener('click', function () {
    modalContainer.style.display = "none"
})

window.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = "none"
    }
})


// For loop

function loop(num) {
    let result = ""
    for (let i = 0; i < num; i++){
        result += "*"
        console.log(result)
    }
}
loop(5)
 

