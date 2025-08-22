// Menú hamburguesa responsive
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainnav');
const navLinks = document.querySelectorAll('.header__nav-link');

function toggleMenu() {
    nav.classList.toggle('header__nav--open');
    hamburger.setAttribute('aria-expanded', nav.classList.contains('header__nav--open'));
}
hamburger.addEventListener('click', toggleMenu);
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('header__nav--open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});
