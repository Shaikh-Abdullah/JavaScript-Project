const btnTwo = document.querySelector('.btn-2')

function alertBtn() {
    alert('I love JavaScript')
}

btnTwo.addEventListener('click', alertBtn)

const btnThree = document.querySelector(".box-3")
function changeBackground() {
    btnThree.style.backgroundColor = "blue"
}
btnThree.addEventListener('mouseover', changeBackground)