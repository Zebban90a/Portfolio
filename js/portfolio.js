document.addEventListener("DOMContentLoaded", (e) => {

const hamburger = document.querySelector('.hamburger');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let showHamburgermenu = false;

//Hanterar hamburgermenyn
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showHamburgermenu) {
        hamburger.classList.add('close')
        menuNav.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))

        showHamburgermenu = true;
        }
     else {
        hamburger.classList.remove('close')
        menuNav.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'))
        showHamburgermenu = false;
    }
}

//Hanterar att menyn stängs när man klickar på nån av länkarna i hamburgermenyn
document.querySelectorAll(".nav-links").forEach(navLinks =>
navLinks.addEventListener("click", () =>
toggleMenu()
))





})