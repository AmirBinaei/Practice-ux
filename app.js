let $ = document
let rate = $.querySelectorAll('.rate')
let btn = $.querySelector('.button')


function removeClass() {
    rate.forEach((rate) => {
        rate.classList.remove('active')
        sessionStorage.removeItem('score')
    })
}

rate.forEach((rate) => {
    rate.addEventListener('click', (event) => {

        removeClass()

        let userSelected = event.target
        userSelected.classList.add('active')
        sessionStorage.setItem('score', userSelected.innerHTML)
    })
})

btn.onclick = () => {
    window.location.href = 'result.html'
}


