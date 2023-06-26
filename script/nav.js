const menuHamburger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".ul-menu")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})