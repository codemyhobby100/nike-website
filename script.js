const navMenu = document.getElementById('nav_menu'),
    toggleMenu = document.getElementById('nav_toggle'),
    closeMenu = document.getElementById('nav_close')

toggleMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// Mouse Animation 

document.addEventListener('mousemove', move)

function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

// GSAP Animation

const timeline = gsap.timeline({ default: { duration: 1 }})

timeline.from('.nav_logo, .nav_toggle', {
    opacity: 0,
    duration: 0.2,
    delay: 0.25,
    y: 10
})

timeline.from('.nav_item', {
    opacity: 0,
    duration: 0.2,
    delay: 0.4,
    y: 30,
    stagger: 0.2
})

timeline.from('.home_title', {
    opacity: 0,
    duration: 0.2,
    delay: 0.7,
    y: 30
})

timeline.from('.home_description', {
    opacity: 0,
    duration: 0.2,
    delay: 0.8,
    y: 30
})

timeline.from('.home_button', {
    opacity: 0,
    duration: 0.2,
    delay: 0.9,
    y: 30
})

timeline.from('.home_image', {
    opacity: 0,
    duration: 0.2,
    delay: 1,
    y: 30
})

const button = document.querySelector('.home_button')

button.addEventListener('click', () => {
    timeline.reverse()
})