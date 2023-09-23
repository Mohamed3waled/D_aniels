let Bar = document.querySelector('.container_Bar')
let Nav = document.querySelector('.Nav_list')
let Links = document.querySelectorAll('.Nav_list li ')
let btn_Up = document.querySelector('.Btn_Up')

Bar.addEventListener('click', () => {
    Nav.classList.toggle('transform')
})

Links.forEach((e) => {
    e.addEventListener('click', () => {
        Nav.classList.add('transform')
    })
})


window.addEventListener('scroll', () => {
    if (window.scrollY >= 600 ) {
        btn_Up.style.right = '30px'
    }
    else {
        btn_Up.style.right = '-60px'
    }
})

btn_Up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

