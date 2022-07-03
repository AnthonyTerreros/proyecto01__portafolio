const btnNavbar = document.querySelector('.nav__toogle')
const navMenu = document.querySelector('.nav__menu')

btnNavbar.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu-visibility")
})