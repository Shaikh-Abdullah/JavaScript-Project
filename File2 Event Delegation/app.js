// document.querySelector("#football").addEventListener('click', function (e) {
//     console.log("football clicked")

//     const target = e.target
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'grey'
//         target.style.color = 'white'
//     }
// })
// document.querySelector("#basketball").addEventListener('click', function (e) {
//     console.log("Basketball Clicked")

//     const target = e.target
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'grey'
//         target.style.color = 'white'
//     }
// })
// document.querySelector("#boxing").addEventListener('click', function (e) {
//     console.log("Boxing Clicked")

//     const target = e.target
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'grey'
//         target.style.color = 'white'
//     }
// })
// document.querySelector("#tennis").addEventListener('click', function (e) {
//     console.log("Tennis Clicked")

//     const target = e.target
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'grey'
//         target.style.color = 'white'
//     }
// })
// document.querySelector("#golf").addEventListener('click', function (e) {
//     console.log("Golf Clicked")

//     const target = e.target
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'grey'
//         target.style.color = 'white'
//     }
// })

//// ALTERNATIVE OPTION WITH LESS CODE

document.querySelector('#sports').addEventListener('click', function (e) {
    console.log(e.target.getAttribute('id') + ' is clicked')

    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "grey";
        target.style.color = "white";
    }
})

const sport = document.querySelector("#sports")
const newSport = document.createElement('li')

newSport.innerText = 'Rugby'
newSport.setAttribute('id', 'rugby')
sport.appendChild(newSport)