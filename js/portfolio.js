document.addEventListener("DOMContentLoaded", (e) => {

const hamburger = document.querySelector('.hamburger');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let showHamburgermenu = false;

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

})